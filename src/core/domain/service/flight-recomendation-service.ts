import { RecommendedOfferParser } from '../parser/recommended-offer-parser';
import { RecommendationResponse } from './../model/recommendation-response';
import { desc, fluent, fluentObject } from '@codibre/fluent-iterable';
import { FlightDestinationsRequest } from 'src/core/domain/model';
import {
    SafePlaceClient,
    LocationScoreClient,
    FlightShoppingClient,
    AirportsClient,
} from 'src/core/domain/client';
import { Injectable } from '@nestjs/common';
import { VolunteeringInstitutionRepository } from '../repository/volunteering-institution-repository';

const MAX_IATAS = 100;

@Injectable()
export class FlightRecommendationService {
    constructor(
        private flightShopping: FlightShoppingClient,
        private airports: AirportsClient,
        private safePlace: SafePlaceClient,
        private locationScore: LocationScoreClient,
        private parser: RecommendedOfferParser,
        private volunteeringInstitutionRepository: VolunteeringInstitutionRepository,
    ) {}

    async get(
        request: FlightDestinationsRequest,
    ): Promise<RecommendationResponse> {
        const flights = await this.flightShopping.getFlightDestinations(
            request,
        );

        const offers = await fluent(flights.data)
            .distinct('destination', (a, b) =>
                a.price.total > b.price.total ? b : a,
            )
            .take(MAX_IATAS)
            .mapAsync(async (flight) => ({
                flight,
                airportData: await this.airports.getAirportByIata(
                    flight.destination,
                ),
            }))
            .filter('airportData')
            .map(async (x) => ({
                ...x,
                cityData: await this.airports.getCity(x.airportData.address),
            }))
            .filter('cityData')
            .map(async (x) => {
                return {
                    ...x,
                    safePlace: (
                        await this.safePlace.getSafetyRate(
                            x.cityData.geoCode,
                            1,
                        )
                    )?.[0],
                    score: (
                        await this.locationScore.getCategoryRatedAreas(
                            x.cityData.geoCode,
                            1,
                        )
                    )?.[0],
                    volunteering: (
                        await this.volunteeringInstitutionRepository.get(
                            x.cityData.geoCode,
                            1,
                        )
                    ),
                };
            })
            .filter('safePlace')
            .filter('score')
            .filter('volunteering')
            .map((x) => {
                return {
                    ...x,
                    overAllScore:
                        x.safePlace.safetyScores.overall +
                        fluentObject(x.score.categoryScores)
                            .map('1')
                            .map('overall')
                            .sum((overall) => overall ?? 0),
                };
            })
            .sortBy(desc('overAllScore'))
            .map((x) =>
                this.parser.parse(
                    x.airportData,
                    x.flight,
                    x.safePlace,
                    x.score,
                    x.volunteering
                ),
            )
            .toArray();

        return { offers };
    }
}

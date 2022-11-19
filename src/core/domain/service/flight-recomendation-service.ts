import { LocationDescriptionRepository } from 'src/core/domain/repository/location-description-repository';
/* eslint-disable no-magic-numbers */
import { Coordinates } from './../model/coordinates';
import { ReviewsRepository } from 'src/core/domain/repository/reviews-repository';
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
    // Square whitelist for hackathon based on Amadeus test data (https://github.com/amadeus4dev/data-collection/blob/master/data/pois.md)
    private squareWhiteList = [
        {
            name: 'Bangalore',
            latitude: [12.92321, 13.023577].sort((a, b) => a - b),
            longitude: [77.536856, 77.642256].sort((a, b) => a - b),
        },
        {
            name: 'Barcelona',
            latitude: [41.347463, 41.42].sort((a, b) => a - b),
            longitude: [2.11, 2.228208].sort((a, b) => a - b),
        },
        {
            name: 'Berlin',
            latitude: [52.490569, 52.541755].sort((a, b) => a - b),
            longitude: [13.354201, 13.457198].sort((a, b) => a - b),
        },
        {
            name: 'Dallas',
            latitude: [32.74031, 32.806993].sort((a, b) => a - b),
            longitude: [-96.836857, -96.737293].sort((a, b) => a - b),
        },
        {
            name: 'London',
            latitude: [51.484703, 51.52018].sort((a, b) => a - b),
            longitude: [-0.169882, -0.061048].sort((a, b) => a - b),
        },
        {
            name: 'New York',
            latitude: [40.697607, 40.792027].sort((a, b) => a - b),
            longitude: [-74.058204, -73.942847].sort((a, b) => a - b),
        },
        {
            name: 'Paris',
            latitude: [48.8, 48.91].sort((a, b) => a - b),
            longitude: [2.25, 2.46].sort((a, b) => a - b),
        },
        {
            name: 'San Francisco',
            latitude: [37.732007, 37.81098].sort((a, b) => a - b),
            longitude: [-122.483716, -122.370076].sort((a, b) => a - b),
        },
    ];
    constructor(
        private flightShopping: FlightShoppingClient,
        private airports: AirportsClient,
        private safePlace: SafePlaceClient,
        private locationScore: LocationScoreClient,
        private parser: RecommendedOfferParser,
        private volunteeringInstitutionRepository: VolunteeringInstitutionRepository,
        private reviews: ReviewsRepository,
        private descriptions: LocationDescriptionRepository,
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
            .filter((x) => this.filterSquareWhitelist(x.cityData.geoCode))
            .map(async (x) => {
                const result = {
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
                    volunteering:
                        await this.volunteeringInstitutionRepository.get(
                            x.cityData.geoCode,
                            1,
                        ),
                    description: await this.descriptions.get(
                        x.cityData.iataCode,
                    ),
                    reviews: await this.reviews.get(x.flight.destination),
                };
                return result;
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
                            .sum((overall) => overall ?? 0) +
                        fluent(x.reviews).map('score').sum(),
                };
            })
            .sortBy(desc('overAllScore'))
            .map((x) =>
                this.parser.parse(
                    x.airportData,
                    x.flight,
                    x.safePlace,
                    x.score,
                    x.volunteering,
                    x.reviews,
                    x.description,
                ),
            )
            .toArray();

        return { offers };
    }

    filterSquareWhitelist(coords: Coordinates) {
        return this.squareWhiteList.some(
            (x) =>
                x.latitude[0] <= coords.latitude &&
                coords.latitude <= x.latitude[1] &&
                x.longitude[0] <= coords.longitude &&
                coords.longitude <= x.longitude[1],
        );
    }
}

import { ScoreOverview } from './../model/recommendation-response';
import { FluentIterable, fluentObject } from '@codibre/fluent-iterable';
import { Injectable } from '@nestjs/common';
import {
    AmadeusLocation,
    FlightTrip,
    SafetyRateResponse,
    CategoryRatedArea,
    VolunteeringInstitution,
} from '../model';
import {
    AttractionDetails,
    RecommendedOffer,
} from '../model/recommendation-response';

const AMADEUS_SCALE = 100;
const OUR_SCALE = 5;
const SCALE_CONVERSION = OUR_SCALE / AMADEUS_SCALE;

@Injectable()
export class RecommendedOfferParser {
    parse(
        airportData: AmadeusLocation,
        flight: FlightTrip,
        safePlace: SafetyRateResponse,
        score: CategoryRatedArea,
        volunteering: VolunteeringInstitution[],
    ): RecommendedOffer {
        const attractionsDetails = fluentObject(score.categoryScores)
            .map(([k, v]): [keyof AttractionDetails, number] => [k, v.overall])
            .append(['vegetarian', score.categoryScores.restaurant.vegetarian]);
        return {
            departureDate: flight.departureDate,
            description: airportData.detailedName, // TODO: Usar descrição turística
            to: flight.destination,
            destination: airportData.detailedName,
            price: Number(flight.price.total),
            returnDate: flight.returnDate,
            scores: {
                attractions: this.getScore(attractionsDetails),
                security: this.getScore(fluentObject(safePlace.safetyScores)),
                volunteering: {
                    overallScore: volunteering.length > 0 ? volunteering.reduce((a, b) => a + b.score, 0) / volunteering.length : 0,
                    details: volunteering,
                },
                reviews: {
                    overallScore: 0,
                    details: [],
                },
            },
        };
    }

    private getScore<T extends object>(
        values: FluentIterable<[keyof T, number]>,
    ): ScoreOverview<T> {
        const details = {} as Record<keyof T, number>;
        const overallScore =
            values
                .execute(([k, v]) => {
                    details[k] = v;
                })
                .map('1')
                .avg((x) => x || 0) / SCALE_CONVERSION;

        return {
            overallScore,
            details: details as T,
        };
    }
}

import { FlightDestinationsRequest } from '../model/flight-destinations-request';
import { FlightDateRequest } from './../model/flight-date-request';
import {
    FlightSearchRequest,
    FlightSearchResponse,
} from 'src/core/domain/model';
import { FlightShoppingClient } from 'src/core/domain/client';
import { Injectable } from '@nestjs/common';
import { fluent } from '@codibre/fluent-iterable';

const MAX_RESULTS = 3;

@Injectable()
export class FlightShoppingService {
    constructor(private readonly airports: FlightShoppingClient) {}

    getOffers(request: FlightSearchRequest): Promise<FlightSearchResponse[]> {
        return this.airports.getOffers(request);
    }

    async getSummarizedFlights(request: FlightSearchRequest) {
        const flights = await this.getOffers(request);
        return fluent(flights)
            .map((x) => {
                const firstSegment = x.itineraries[0].segments[0];
                const lastSegment = fluent(x.itineraries[0].segments).last()!;
                return {
                    type: x.type,
                    airline: firstSegment.carrierCode,
                    itinerary: {
                        from: firstSegment.departure.iataCode,
                        to: lastSegment.departure.iataCode,
                        departureDate: firstSegment.departure.at,
                        returnDate: x.itineraries[1]?.segments[0].departure.at,
                    },
                    price: x.price.total,
                };
            })
            .sortBy((x) => x.price)
            .take(MAX_RESULTS)
            .toArray();
    }

    getFlightDates(request: FlightDateRequest): Promise<any[]> {
        return this.airports.getFlightDates(request);
    }

    getFlightDestinations(request: FlightDestinationsRequest) {
        return this.airports.getFlightDestinations(request);
    }
}

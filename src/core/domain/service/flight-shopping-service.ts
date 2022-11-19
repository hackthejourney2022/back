import { FlightDestinationsRequest } from '../model/flight-destinations-request';
import { FlightDateRequest } from './../model/flight-date-request';
import { FlightSearchRequest } from 'src/core/domain/model';
import { FlightShoppingClient } from 'src/core/domain/client';
import { Airport } from '../model/airport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightShoppingService {
    constructor(private readonly airports: FlightShoppingClient) {}

    getOffers(request: FlightSearchRequest): Promise<Airport[]> {
        return this.airports.getOffers(request);
    }

    getFlightDates(request: FlightDateRequest): Promise<any[]> {
        return this.airports.getFlightDates(request);
    }

    getFlightDestinations(request: FlightDestinationsRequest): Promise<any[]> {
        console.log(request);
        return this.airports.getFlightDestinations(request);
    }
}

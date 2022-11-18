import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import {
    FlightSearchRequest,
    FlightSearchResponse,
} from 'src/core/domain/model';
import { GeneralCache } from 'src/infrastructure/cache/general-cache';
import { depaginateAmadeus } from './depaginate-amadeus';
import { FlightShoppingClient } from 'src/core/domain/client';
import ms from 'ms';

const DEFAULT_AVAILABILITY_CACHE_TTL = ms('5m');
@Injectable()
export class ApiAmadeusFlightShoppingClient implements FlightShoppingClient {
    constructor(
        @Inject('AMADEUS') private amadeus: Amadeus,
        private cache: GeneralCache,
    ) {}

    async getOffers(
        request: FlightSearchRequest,
    ): Promise<FlightSearchResponse[]> {
        return this.cache.get(
            `getOffers:${request.originLocationCode}:${request.destinationLocationCode}:${request.departureDate}:${request.returnDate}:${request.adults}${request.children}${request.infants}`,
            () =>
                depaginateAmadeus(
                    this.amadeus,
                    (x) => this.amadeus.shopping.flightOffersSearch.get(x),
                    request,
                ).toArray(),
            undefined,
            DEFAULT_AVAILABILITY_CACHE_TTL,
        );
    }
}

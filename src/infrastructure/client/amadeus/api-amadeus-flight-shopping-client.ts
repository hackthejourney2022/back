import { AppLogger } from './../../../core/domain/utils/app-logger';
import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import {
    FlightDateRequest,
    FlightDestinationsRequest,
    FlightSearchRequest,
    FlightSearchResponse,
} from 'src/core/domain/model';
import { GeneralCache } from 'src/infrastructure/cache/general-cache';
import { depaginateAmadeus } from './depaginate-amadeus';
import { FlightShoppingClient } from 'src/core/domain/client';
import ms from 'ms';
import { flightDestinationsFallback } from './flight-offers-fallback';
import { amadeusFallback } from './amadeus-fallback';

const DEFAULT_AVAILABILITY_CACHE_TTL = ms('5m');
@Injectable()
export class ApiAmadeusFlightShoppingClient implements FlightShoppingClient {
    constructor(
        @Inject('AMADEUS') private amadeus: Amadeus,
        private cache: GeneralCache,
        private logger: AppLogger,
    ) {}

    async getOffers(
        request: FlightSearchRequest,
    ): Promise<FlightSearchResponse[]> {
        return this.cache.get(
            `getOffers:${request.originLocationCode}:${request.destinationLocationCode}:${request.departureDate}:${request.returnDate}:${request.adults}${request.children}${request.infants}`,
            () =>
                depaginateAmadeus(
                    this.amadeus,
                    (x) =>
                        this.amadeus.shopping.flightOffersSearch.get({
                            ...x,
                            currencyCode: 'BRL',
                        }),
                    request,
                ).toArray(),
            undefined,
            DEFAULT_AVAILABILITY_CACHE_TTL,
        );
    }

    async getFlightDates(request: FlightDateRequest): Promise<any[]> {
        return this.cache.get(
            `getFlightDates:${request.origin}:${request.destination}`,
            () =>
                depaginateAmadeus(
                    this.amadeus,
                    (x) => this.amadeus.shopping.flightDates.get(x),
                    request,
                ).toArray(),
            undefined,
            DEFAULT_AVAILABILITY_CACHE_TTL,
        );
    }

    async getFlightDestinations(
        request: FlightDestinationsRequest,
    ): Promise<any> {
        this.logger.info(
            `Requesting flights destinations for ${JSON.stringify(request)}`,
        );
        const result = this.cache.get(
            `getFlightDestinations:${request.origin}:${request.departureDate}:${request.duration}:${request.oneWay}:${request.maxPrice}`,
            () =>
                amadeusFallback(
                    () => this.amadeus.shopping.flightDestinations.get(request),
                    this.logger,
                    () => flightDestinationsFallback,
                    'getFlightDestinations',
                ),
            undefined,
            DEFAULT_AVAILABILITY_CACHE_TTL,
        );
        this.logger.info(
            `Finished flights destinations for ${JSON.stringify(request)}`,
        );
        return result;
    }
}

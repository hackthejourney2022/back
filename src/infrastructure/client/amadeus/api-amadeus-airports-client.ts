import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import { AirportsClient } from 'src/core/domain/client';
import { Coordinates, Airport } from 'src/core/domain/model';
import { GeneralCache } from 'src/infrastructure/cache/general-cache';
import { depaginateAmadeus } from './depaginate-amadeus';

@Injectable()
export class ApiAmadeusAirportsClient implements AirportsClient {
    constructor(
        @Inject('AMADEUS') private amadeus: Amadeus,
        private cache: GeneralCache,
    ) {
        this.getNearestAirports = this.cache.wrap(
            this.getNearestAirports.bind(this),
            (req, maxResults) =>
                `getNearestAirports:${req.latitude}:${req.longitude}:${maxResults}`,
        );
    }

    getNearestAirports(
        request: Coordinates,
        maxResults: number = Number.POSITIVE_INFINITY,
    ): Promise<Airport[]> {
        return depaginateAmadeus(
            this.amadeus,
            (x) => this.amadeus.referenceData.locations.airports.get(x),
            request,
            maxResults,
        ).toArray();
    }
}

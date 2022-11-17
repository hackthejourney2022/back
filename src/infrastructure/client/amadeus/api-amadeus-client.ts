import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import { AirportsClient } from 'src/core/domain/client';
import { Coordinates, Airport } from 'src/core/domain/model';
import {
    depaginate,
    FluentAsyncIterable,
    fluentAsync,
} from '@codibre/fluent-iterable';
import { GeneralCache } from 'src/infrastructure/cache/general-cache';

function depaginateAmadeus(
    amadeus: Amadeus,
    req: (payload: object) => Promise<any>,
    request: object,
    maxResults: number,
): FluentAsyncIterable<any> {
    let count = 0;
    let result = fluentAsync(
        depaginate(async (last: any) => {
            if (!last || (last.result.meta.links.next && count < maxResults)) {
                const body = await (last ? amadeus.next(last) : req(request));
                count += body.data.length;
                return {
                    results: body.data,
                    nextPageToken: body,
                };
            }

            return undefined;
        }),
    );
    if (maxResults < Number.POSITIVE_INFINITY) {
        result = result.take(maxResults);
    }
    return result;
}

@Injectable()
export class ApiAmadeusClient implements AirportsClient {
    constructor(
        @Inject('AMADEUS') private amadeus: Amadeus,
        private cache: GeneralCache,
    ) {
        this.getNearestAirports = this.cache.wrap(
            this.getNearestAirports.bind(this),
            (req, maxResults) =>
                `${this.getNearestAirports.name}${req.latitude}:${req.longitude}:${maxResults}`,
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

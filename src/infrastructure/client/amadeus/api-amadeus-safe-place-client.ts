import { AppLogger, randomInt } from 'src/core/domain/utils';
import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import { Coordinates } from 'src/core/domain/model';
import { GeneralCache } from 'src/infrastructure/cache/general-cache';
import { depaginateAmadeus } from './depaginate-amadeus';
import { SafePlaceClient } from 'src/core/domain/client/safe-place-client';
import { amadeusFallback } from './amadeus-fallback';
import { SafetyRateResponse } from 'src/core/domain/model/safety-rate-response';
import { safePlaceFallback } from './flight-offers-fallback';

@Injectable()
export class ApiAmadeusSafePlaceClient implements SafePlaceClient {
    constructor(
        @Inject('AMADEUS') private amadeus: Amadeus,
        private cache: GeneralCache,
        private logger: AppLogger,
    ) {
        this.getSafetyRate = this.cache.wrap(
            this.getSafetyRate.bind(this),
            (req, maxResults) =>
                `getSafetyRate:${req.latitude}:${req.longitude}:${maxResults}`,
            (x) => !x,
        );
    }

    getSafetyRate(
        request: Coordinates,
        maxResults?: number | undefined,
    ): Promise<SafetyRateResponse[]> {
        return amadeusFallback(
            () =>
                depaginateAmadeus(
                    this.amadeus,
                    (x) => this.amadeus.safety.safetyRatedLocations.get(x),
                    request,
                    maxResults,
                ).toArray(),
            this.logger,
            () => [safePlaceFallback[randomInt(0, safePlaceFallback.length)]],
        );
    }
}

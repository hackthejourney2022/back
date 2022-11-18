import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import { Coordinates, SafetyRate } from 'src/core/domain/model';
import { GeneralCache } from 'src/infrastructure/cache/general-cache';
import { depaginateAmadeus } from './depaginate-amadeus';
import { SafePlaceClient } from 'src/core/domain/client/safe-place-client';

@Injectable()
export class ApiAmadeusSafePlaceClient implements SafePlaceClient {
    constructor(
        @Inject('AMADEUS') private amadeus: Amadeus,
        private cache: GeneralCache,
    ) {
        this.getSafetyRate = this.cache.wrap(
            this.getSafetyRate.bind(this),
            (req, maxResults) =>
                `getSafetyRate:${req.latitude}:${req.longitude}:${maxResults}`,
        );
    }

    getSafetyRate(
        request: Coordinates,
        maxResults?: number | undefined,
    ): Promise<SafetyRate[]> {
        return depaginateAmadeus(
            this.amadeus,
            (x) => this.amadeus.safety.safetyRatedLocations.get(x),
            request,
            maxResults,
        ).toArray();
    }
}

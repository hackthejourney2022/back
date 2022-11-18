import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import { Coordinates, SafetyRate } from 'src/core/domain/model';
import { GeneralCache } from 'src/infrastructure/cache/general-cache';
import { depaginateAmadeus } from './depaginate-amadeus';
import { LocationScoreClient } from 'src/core/domain/client/location-score-client';

@Injectable()
export class ApiAmadeusLocationScoreClient implements LocationScoreClient {
    constructor(
        @Inject('AMADEUS') private amadeus: Amadeus,
        private cache: GeneralCache,
    ) {
        this.getScore = this.cache.wrap(
            this.getScore.bind(this),
            (req, maxResults) =>
                `${this.getScore.name}${req.latitude}:${req.longitude}:${maxResults}`,
        );
    }

    getScore(
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

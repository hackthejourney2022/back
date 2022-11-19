import { AppLogger } from 'src/core/domain/utils';
import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import { Coordinates } from 'src/core/domain/model';
import { GeneralCache } from 'src/infrastructure/cache/general-cache';
import { depaginateAmadeus } from './depaginate-amadeus';
import { LocationScoreClient } from 'src/core/domain/client';
import { CategoryRatedArea } from 'src/infrastructure/client/amadeus/models';
import { amadeusFallback } from './amadeus-fallback';

@Injectable()
export class ApiAmadeusLocationScoreClient implements LocationScoreClient {
    constructor(
        @Inject('AMADEUS') private amadeus: Amadeus,
        private cache: GeneralCache,
        private logger: AppLogger,
    ) {
        this.getCategoryRatedAreas = this.cache.wrap(
            this.getCategoryRatedAreas.bind(this),
            (req, maxResults) =>
                `getCategoryRatedAreas:${req.latitude}:${req.longitude}:${maxResults}`,
        );
    }

    getCategoryRatedAreas(
        request: Coordinates,
        maxResults?: number | undefined,
    ): Promise<CategoryRatedArea[]> {
        return amadeusFallback(
            () =>
                depaginateAmadeus(
                    this.amadeus,
                    (x) =>
                        this.amadeus.location.analytics.categoryRatedAreas.get(
                            x,
                        ),
                    request,
                    maxResults,
                ).toArray(),
            this.logger,
            undefined,
        );
    }
}

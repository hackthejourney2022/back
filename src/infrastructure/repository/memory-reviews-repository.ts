import { AppLogger } from 'src/core/domain/utils';
import { LocationReview } from 'src/core/domain/model/location-review';
import { Injectable } from '@nestjs/common';
import { ReviewsRepository } from 'src/core/domain/repository/reviews-repository';
import { GeneralCache } from 'src/infrastructure/cache';
import { locationReviews } from './reviews-mock';
import { getRandomItems, randomInt } from '../../core/domain/utils';

@Injectable()
export class MemoryReviewsRepository implements ReviewsRepository {
    constructor(private cache: GeneralCache, private logger: AppLogger) {
        this.get = this.cache.wrap(
            this.get.bind(this),
            (req) => `getReviews:${req}`,
            (x) => !x,
        );
    }

    async get(_iata: string): Promise<LocationReview[]> {
        return getRandomItems(
            locationReviews,
            randomInt(1, locationReviews.length),
            this.logger,
            'getReviews',
        );
    }
}

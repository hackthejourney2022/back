import { AppLogger } from 'src/core/domain/utils';
import { Injectable } from '@nestjs/common';
import { GeneralCache } from 'src/infrastructure/cache';
import { getRandomItems } from '../../core/domain/utils';
import { LocationDescriptionRepository } from 'src/core/domain/repository/location-description-repository';
import { locationDescriptionMock } from './location-description-mock';

@Injectable()
export class MemoryLocationDescriptionRepository
    implements LocationDescriptionRepository
{
    constructor(private cache: GeneralCache, private logger: AppLogger) {
        this.get = this.cache.wrap(
            this.get.bind(this),
            (req) => `getLocationDescriptions:${req}`,
            (x) => !x,
        );
    }

    async get(_iata: string): Promise<string> {
        return getRandomItems(
            locationDescriptionMock,
            1,
            this.logger,
            'getLocationDescriptions',
        )[0];
    }
}

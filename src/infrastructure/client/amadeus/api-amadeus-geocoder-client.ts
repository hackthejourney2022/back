import { AppLogger } from 'src/core/domain/utils';
import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import { GeocoderClient } from 'src/core/domain/client';
import { GeneralCache } from 'src/infrastructure/cache/general-cache';
import { depaginateAmadeus } from './depaginate-amadeus';
import { Place } from 'src/core/domain/model/place';

@Injectable()
export class ApiAmadeusGeocoderClient implements GeocoderClient {
    constructor(
        @Inject('AMADEUS') private amadeus: Amadeus,
        private cache: GeneralCache,
        private logger: AppLogger,
    ) {
        this.getPlaces = this.cache.wrap(
            this.getPlaces.bind(this),
            (search) => `getPlaces:${search}`,
            (x) => !x,
        );
    }

    async getPlaces(search: string): Promise<Place[]> {
        this.logger.info(`Requesting cities for ${JSON.stringify(search)}`);
        const result = await depaginateAmadeus(
            this.amadeus,
            (x) => this.amadeus.referenceData.locations.get(x),
            {
                keyword: search,
                subType: 'AIRPORT,CITY',
            },
        )
            .map(
                (x): Place => ({
                    name: `${x.name}, ${x.address.cityName}, ${x.address.stateCode}, ${x.address.countryCode}`,
                    coordinates: x.geoCode,
                }),
            )
            .toArray();
        this.logger.info(`Requesting places for ${JSON.stringify(search)}`);

        return result;
    }
}

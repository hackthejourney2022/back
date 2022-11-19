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
    ) {
        this.getPlaces = this.cache.wrap(
            this.getPlaces.bind(this),
            (search) => `getPlaces:${search}`,
            (x) => !x,
        );
    }

    getPlaces(search: string): Promise<Place[]> {
        return depaginateAmadeus(
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
    }
}

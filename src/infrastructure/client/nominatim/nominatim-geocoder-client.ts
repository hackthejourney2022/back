import { GeneralCache } from 'src/infrastructure/cache/general-cache';
import { fluent, identity } from '@codibre/fluent-iterable';
import { HttpNominatimClient } from './http-nominatim-client';
import { GeocoderClient } from 'src/core/domain/client/geocoder-client';
import { Place } from 'src/core/domain/model/place';
import { Injectable } from '@nestjs/common';

interface NominatimPlace {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    boundingbox: string[];
    lat: string;
    lon: string;
    display_name: string;
    place_rank: number;
    category: string;
    type: string;
    importance: number;
    icon: string;
}

@Injectable()
export class NominatimGeocoderClient implements GeocoderClient {
    constructor(
        private client: HttpNominatimClient,
        private cache: GeneralCache,
    ) {
        this.getPlaces = this.cache.wrap(this.getPlaces.bind(this), identity);
    }

    async getPlaces(search: string): Promise<Place[]> {
        const result: NominatimPlace[] = await this.client.get('search.php', {
            q: search,
            format: 'jsonv2',
        });

        return fluent(result)
            .map((x) => ({
                coordinates: {
                    latitude: x.lat,
                    longitude: x.lon,
                },
                name: x.display_name,
            }))
            .toArray();
    }
}

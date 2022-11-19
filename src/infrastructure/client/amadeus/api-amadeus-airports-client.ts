import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import { AirportsClient } from 'src/core/domain/client';
import { Coordinates, AmadeusLocation } from 'src/core/domain/model';
import { GeneralCache } from 'src/infrastructure/cache/general-cache';
import { depaginateAmadeus } from './depaginate-amadeus';
import { Address } from 'src/core/domain/model/address';

@Injectable()
export class ApiAmadeusAirportsClient implements AirportsClient {
    constructor(
        @Inject('AMADEUS') private amadeus: Amadeus,
        private cache: GeneralCache,
    ) {
        this.getNearestAirports = this.cache.wrap(
            this.getNearestAirports.bind(this),
            (req, maxResults) =>
                `getNearestAirports:${req.latitude}:${req.longitude}:${maxResults}`,
            (x) => !x,
        );
        this.getAirportByIata = this.cache.wrap(
            this.getAirportByIata.bind(this),
            (iata) => `getAirportByIata:${iata}`,
            (x) => !x,
        );
        this.getCity = this.cache.wrap(
            this.getCity.bind(this),
            (address) => `getCity:${address.countryCode}:${address.cityName}`,
            (x) => !x,
        );
    }

    async getCity(address: Address): Promise<AmadeusLocation | undefined> {
        const result = await this.amadeus.referenceData.locations.get({
            keyword: address.cityName,
            countryCode: address.countryCode,
            subType: 'CITY',
        });
        return result?.data?.[0];
    }

    getNearestAirports(
        request: Coordinates,
        maxResults: number = Number.POSITIVE_INFINITY,
    ): Promise<AmadeusLocation[]> {
        return depaginateAmadeus(
            this.amadeus,
            (x) => this.amadeus.referenceData.locations.airports.get(x),
            request,
            maxResults,
        ).toArray();
    }

    async getAirportByIata(iata: string): Promise<AmadeusLocation | undefined> {
        // const result = await this.amadeus.client.get(
        //     `/v1/reference-data/locations/A${iata}`,
        // );
        // return result?.data;
        const result = await this.amadeus.referenceData.locations.get({
            keyword: iata,
            subType: 'AIRPORT,CITY',
        });
        return result?.data?.[0];
    }
}

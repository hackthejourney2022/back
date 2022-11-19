import { PlaceAirports } from './../model/place-airports';
import { fluentAsync, FluentAsyncIterable } from '@codibre/fluent-iterable';
import { Airport } from '../model/airport';
import {
    AirportsClient,
    GeocoderClient,
    SafePlaceClient,
    LocationScoreClient,
} from 'src/core/domain/client';
import { Injectable } from '@nestjs/common';
import {
    SafetyRate,
    Coordinates,
    CategoryRatedArea,
    VolunteeringInstitution,
} from '../model';
import { VolunteeringInstitutionRepository } from 'src/core/domain/repository/volunteering-institution-repository';

const MAX_AIRPORTS_PER_PLACE = 3;
@Injectable()
export class LocationService {
    constructor(
        private readonly airports: AirportsClient,
        private readonly geocoder: GeocoderClient,
        private readonly safePlace: SafePlaceClient,
        private readonly locationScore: LocationScoreClient,
        private readonly volunteeringInstitution: VolunteeringInstitutionRepository,
    ) {}

    getLocation(request: Coordinates): Promise<Airport[]> {
        return this.airports.getNearestAirports(request);
    }

    getLocationByText(text: string): FluentAsyncIterable<PlaceAirports> {
        return fluentAsync(this.geocoder.getPlaces(text))
            .map(async (place) => {
                const airports = this.airports.getNearestAirports(
                    place.coordinates,
                    MAX_AIRPORTS_PER_PLACE,
                );
                return {
                    place,
                    airports: await airports,
                };
            })
            .filter((x) => x.airports.length);
    }

    getSafetyRates(request: Coordinates): Promise<SafetyRate[]> {
        return this.safePlace.getSafetyRate(request);
    }

    getCategoryRatedAreas(request: Coordinates): Promise<CategoryRatedArea[]> {
        return this.locationScore.getCategoryRatedAreas(request);
    }

    getVolunteeringInstitutions(
        request: Coordinates,
    ): Promise<VolunteeringInstitution[]> {
        return this.volunteeringInstitution.get(request);
    }
}

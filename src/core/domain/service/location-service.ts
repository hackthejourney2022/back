import { PlaceAirports } from './../model/place-airports';
import { fluentAsync, FluentAsyncIterable } from '@codibre/fluent-iterable';
import { Airport } from '../model/airport';
import {
  AirportsClient,
  GeocoderClient,
  LocationScoreClient,
  SafePlaceClient,
} from 'src/core/domain/client';
import { Injectable } from '@nestjs/common';
import { Coordinates } from '../model/coordinates';
import { SafetyRate, LocationScore } from '../model';

const MAX_AIRPORTS_PER_PLACE = 3;
@Injectable()
export class LocationService {
  constructor(
    private readonly airports: AirportsClient,
    private readonly geocoder: GeocoderClient,
    private readonly safePlace: SafePlaceClient,
    private readonly score: LocationScoreClient,
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

  getScore(request: Coordinates): Promise<LocationScore[]> {
    return this.score.getScore(request);
  }
}

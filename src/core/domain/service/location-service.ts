import { PlaceAirports } from './../model/place-airports';
import { GeocoderClient } from 'src/core/domain/client/geocoder-client';
import { fluentAsync, FluentAsyncIterable } from '@codibre/fluent-iterable';
import { Airport } from '../model/airport';
import { AmadeusClient } from 'src/core/domain/client';
import { Injectable } from '@nestjs/common';
import { Coordinates } from '../model/coordinates';

const MAX_AIRPORTS_PER_PLACE = 3;
@Injectable()
export class LocationService {
  constructor(
    private readonly amadeus: AmadeusClient,
    private readonly geocoder: GeocoderClient,
  ) {}

  getLocation(request: Coordinates): Promise<Airport[]> {
    return this.amadeus.getNearestAirports(request);
  }

  getLocationByText(text: string): FluentAsyncIterable<PlaceAirports> {
    return fluentAsync(this.geocoder.getPlaces(text))
      .map(async (place) => {
        const airports = this.amadeus.getNearestAirports(
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
}

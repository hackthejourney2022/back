import { Place } from '../model/place';

export abstract class GeocoderClient {
  abstract getPlaces(search: string): Promise<Place[]>;
}

import { Coordinates, Airport } from 'src/core/domain/model';

export abstract class AirportsClient {
  abstract getNearestAirports(
    request: Coordinates,    maxResults?: number,
  ): Promise<Airport[]>;
}

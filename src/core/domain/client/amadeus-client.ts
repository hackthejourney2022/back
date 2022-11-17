import { Coordinates, Airport } from 'src/core/domain/model';

export abstract class AmadeusClient {
  abstract getNearestAirports(
    request: Coordinates,
    maxResults?: number,
  ): Promise<Airport[]>;
}

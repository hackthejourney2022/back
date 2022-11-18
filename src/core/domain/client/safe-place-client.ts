import { Coordinates, SafetyRate } from 'src/core/domain/model';

export abstract class SafePlaceClient {
  abstract getSafetyRate(
    request: Coordinates,
    maxResults?: number,
  ): Promise<SafetyRate[]>;
}

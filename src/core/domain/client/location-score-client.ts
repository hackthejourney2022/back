import { Coordinates, SafetyRate } from 'src/core/domain/model';

export abstract class LocationScoreClient {
  abstract getScore(
    request: Coordinates,
    maxResults?: number,
  ): Promise<SafetyRate[]>;
}

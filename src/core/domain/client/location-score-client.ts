import {
  Coordinates,
  CategoryRatedArea,
} from 'src/core/domain/model';

export abstract class LocationScoreClient {
  abstract getCategoryRatedAreas(
    request: Coordinates,
    maxResults?: number,
  ): Promise<CategoryRatedArea[]>;
}

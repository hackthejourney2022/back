import { LocationReview } from '../model/location-review';

export abstract class ReviewsRepository {
    abstract get(iata: string): Promise<LocationReview[]>;
}

import { Coordinates } from 'src/core/domain/model';
import { SafetyRateResponse } from '../model/safety-rate-response';

export abstract class SafePlaceClient {
    abstract getSafetyRate(
        request: Coordinates,
        maxResults?: number,
    ): Promise<SafetyRateResponse[]>;
}

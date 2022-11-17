import { BaseSampleValidator } from './application/validators/base-sample-validator';
import { LocationService } from './domain/service/location-service';

export const coreModules = [LocationService, BaseSampleValidator];

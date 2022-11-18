import { FlightShoppingService, LocationService } from './domain/service';
import { BaseSampleValidator } from './application/validators/base-sample-validator';

export const coreModules = [FlightShoppingService, LocationService, BaseSampleValidator];

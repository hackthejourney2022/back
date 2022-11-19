import * as services from './domain/service';
import * as parsers from './domain/parser';
import { BaseSampleValidator } from './application/validators/base-sample-validator';

export const coreModules = [
    ...Object.values(services),
    ...Object.values(parsers),
    BaseSampleValidator,
];

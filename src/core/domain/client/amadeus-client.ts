import { FluentAsyncIterable } from '@codibre/fluent-iterable';
import { LocationRequest, LocationResponse } from 'src/core/domain/model';

export abstract class AmadeusClient {
  abstract getNearestAirports(
    request: LocationRequest,
    approximateMax?: number,
  ): FluentAsyncIterable<LocationResponse>;
}

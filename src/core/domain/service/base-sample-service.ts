import { FluentAsyncIterable } from '@codibre/fluent-iterable';
import { LocationResponse } from './../model/location-response';
import { AmadeusClient } from 'src/core/domain/client';
import { Injectable } from '@nestjs/common';
import { LocationRequest } from '../model/location-request';

@Injectable()
export class BaseSampleService {
  constructor(private readonly client: AmadeusClient) {}

  getLocation(request: LocationRequest): FluentAsyncIterable<LocationResponse> {
    return this.client.getNearestAirports(request);
  }
}

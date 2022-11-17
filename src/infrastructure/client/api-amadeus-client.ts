import { Amadeus } from './base-amadeus-client';
import { Inject, Injectable } from '@nestjs/common';
import { AmadeusClient } from 'src/core/domain/client';
import { LocationRequest, LocationResponse } from 'src/core/domain/model';
import {
  depaginate,
  FluentAsyncIterable,
  fluentAsync,
} from '@codibre/fluent-iterable';

function depaginateAmadeus(
  amadeus: Amadeus,
  req: (payload: object) => Promise<any>,
  request: object,
  approximateMax: number,
): FluentAsyncIterable<any> {
  let count = 0;
  return fluentAsync(
    depaginate(async (last: any) => {
      if (!last || (last.result.meta.links.next && count < approximateMax)) {
        const body = await (last ? amadeus.next(last) : req(request));
        count += body.data.length;
        return {
          results: body.data,
          nextPageToken: body,
        };
      }

      return undefined;
    }),
  );
}

@Injectable()
export class ApiAmadeusClient implements AmadeusClient {
  constructor(@Inject('AMADEUS') private amadeus: Amadeus) {}

  getNearestAirports(
    request: LocationRequest,
    approximateMax: number = Number.POSITIVE_INFINITY,
  ): FluentAsyncIterable<LocationResponse> {
    return depaginateAmadeus(
      this.amadeus,
      (x) => this.amadeus.referenceData.locations.airports.get(x),
      request,
      approximateMax,
    );
  }
}

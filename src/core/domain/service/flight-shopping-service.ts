import { FlightSearchRequest } from 'src/core/domain/model';
import { FlightShoppingClient } from 'src/core/domain/client';
import { Airport } from '../model/airport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightShoppingService {
  constructor(private readonly airports: FlightShoppingClient) {}

  getLocation(request: FlightSearchRequest): Promise<Airport[]> {
    return this.airports.getOffers(request);
  }
}

import {
  FlightDateRequest,
  FlightSearchRequest,
  FlightSearchResponse,
} from '../model';

export abstract class FlightShoppingClient {
  abstract getOffers(
    request: FlightSearchRequest,
  ): Promise<FlightSearchResponse[]>;

  abstract getFlightDates(
    request: FlightDateRequest,
  ): Promise<FlightSearchResponse[]>;
}

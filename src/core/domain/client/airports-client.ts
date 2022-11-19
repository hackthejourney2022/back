import { Coordinates, AmadeusLocation } from 'src/core/domain/model';
import { Address } from '../model/address';

export abstract class AirportsClient {
    abstract getCity(address: Address): Promise<AmadeusLocation | undefined>;
    abstract getNearestAirports(
        request: Coordinates,
        maxResults?: number,
    ): Promise<AmadeusLocation[]>;
    abstract getAirportByIata(
        iata: string,
    ): Promise<AmadeusLocation | undefined>;
}

import { Coordinates } from 'src/core/domain/model';
import { Address } from './address';

export class AmadeusLocation {
    type!: string;
    subType!: string;
    name!: string;
    detailedName!: string;
    id!: string;
    timeZoneOffset!: string;
    iataCode!: string;
    geoCode!: Coordinates;
    address!: Address;
}

import { Price } from './price';

export class FlightDestinationsResponse {
    data!: FlightTrip[];
    dictionaries!: Dictionaries;
    meta!: FlightDestinationMeta;
}

export class FlightDestinationMeta {
    currency!: string;
    links!: FlightDestinationLinks;
    defaults!: Defaults;
}

export class Defaults {
    departureDate!: string;
    oneWay!: boolean;
    duration!: string;
    nonStop!: boolean;
    viewBy!: string;
}

export class Dictionaries {
    currencies!: Currencies;
    locations!: Locations;
}

export class LocationDetail {
    subType!: string;
    detailedName!: string;
}

export class Locations {
    [locationCode: string]: LocationDetail;
}

export class Currencies {
    [code: string]: string;
}

export class FlightTrip {
    type!: string;
    origin!: string;
    destination!: string;
    departureDate!: string;
    returnDate!: string;
    price!: Price;
    links!: FlightDestinationLinks;
}

export class FlightDestinationLinks {
    flightDates!: string;
    flightOffers!: string;
}

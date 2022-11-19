import { Price } from 'src/core/domain/model';

export class AmadeusLocation {
    type!: string;
    subType!: string;
    name!: string;
    detailedName!: string;
    id!: string;
    timeZoneOffset!: string;
    iataCode!: string;
    geoCode!: GeoCode;
    address!: Address;
}

export class AmadeusHttpResponse<T> {
    statusCode!: number;
    request!: Request;
    body!: string;
    result!: Result<T>;
    data?: T;
    parsed!: boolean;
}

export class Result<T> {
    meta!: HttpMeta;
    data?: T;
}

export class Address {
    cityName!: string;
    cityCode!: string;
    countryName!: string;
    countryCode!: string;
    stateCode!: string;
    regionCode!: string;
}

export class GeoCode {
    latitude!: number;
    longitude!: number;
}

export class HttpMeta {
    count!: number;
    links!: Links;
}

export class Links {
    self!: string;
    next?: string;
    first?: string;
    last?: string;
}

export class Request {
    host!: string;
    port!: number;
    ssl!: boolean;
    scheme!: string;
    verb!: string;
    path!: string;
    params!: Params;
    queryPath!: string;
    bearerToken!: string;
    clientVersion!: string;
    languageVersion!: string;
    appId?: any;
    appVersion?: any;
    ListHTTPOverride!: string[];
}

export class Params {
    keyword!: string;
    subType!: string;
}

export class CategoryRatedArea {
    type!: string;
    geoCode!: GeoCode;
    radius!: number;
    categoryScores!: CategoryScores;
}

export class CategoryScores {
    sight!: Sight;
    restaurant!: Restaurant;
    shopping!: Shopping;
    nightLife!: NightLife;
}

export class NightLife {
    overall!: number;
}

export class Shopping {
    overall!: number;
    luxury!: number;
}

export class Restaurant {
    overall!: number;
    vegetarian!: number;
}

export class Sight {
    overall!: number;
    historical!: number;
    beachAndPark!: number;
}

export class CheapFlightDate {
    type!: string;
    origin!: string;
    destination!: string;
    departureDate!: string;
    returnDate!: string;
    price!: Price;
    links!: CheapFlightLinks;
}

export class CheapFlightLinks {
    flightDestinations!: string;
    flightOffers!: string;
}

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
    links!: Links;
}

export class FlightDestinationLinks {
    flightDates!: string;
    flightOffers!: string;
}

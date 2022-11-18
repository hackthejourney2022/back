export class AmadeusLocation {
    type!: string;
    subType!: string;
    name!: string;
    detailedName!: string;
    id!: string;
    self!: Self;
    timeZoneOffset!: string;
    iataCode!: string;
    geoCode!: GeoCode;
    address!: Address;
}

export class AmadeusHttpResponse<T> {
    headers!: Headers;
    statusCode!: number;
    request!: Request;
    body!: string;
    result!: Result<T>;
    data?: T;
    parsed!: boolean;
}

export class Result<T> {
    meta!: Meta;
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

export class Self {
    href!: string;
    methods!: string[];
}

export class Meta {
    count!: number;
    links!: Links;
}

export class Links {
    self!: string;
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
    headers!: Headers2;
    ListHTTPOverride!: string[];
}

export class Headers2 {
    'User-Agent': string;
    Accept!: string;
    Authorization!: string;
    'Content-Type': string;
}

export class Params {
    keyword!: string;
    subType!: string;
}

export class Headers {
    date!: string;
    'content-type': string;
    'content-length': string;
    connection!: string;
    'ama-request-id': string;
    'ama-gateway-request-id': string;
    'access-control-allow-headers': string;
    'access-control-max-age': string;
    'access-control-allow-methods': string;
    server!: string;
    'access-control-allow-origin': string;
}

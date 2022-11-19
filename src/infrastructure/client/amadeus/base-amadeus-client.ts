import { FlightSearchResponse } from 'src/core/domain/model';
import {
    AmadeusHttpResponse,
    AmadeusLocation,
    CategoryRatedArea,
    CheapFlightDate,
} from './models';
export interface Amadeus {
    next(nextToken: any): Promise<any>;
    version: string;
    referenceData: ReferenceData;
    shopping: Shopping;
    booking: Booking;
    travel: Travel;
    eReputation: EReputation;
    media: Media;
    airport: Airport;
    pagination: AmadeusRequests;
    safety: Safety;
    schedule: Schedule;
    analytics: Analytics2;
    location: Location;
    dutyOfCare: DutyOfCare;
    airline: Airline;
}

export interface Airline {
    destinations: AmadeusRequests;
}

export interface DutyOfCare {
    diseases: Diseases;
}

export interface Diseases {
    covid19AreaReport: AmadeusRequests;
    covid19Report: AmadeusRequests;
}

export interface Location {
    analytics: Analytics3;
}

export interface Analytics3 {
    categoryRatedAreas: AmadeusRequests<CategoryRatedArea[]>;
}

export interface Analytics2 {
    itineraryPriceMetrics: AmadeusRequests;
}

export interface Schedule {
    flights: AmadeusRequests;
}

export interface Safety {
    safetyRatedLocations: Activities;
}

export interface Airport {
    directDestinations: AmadeusRequests;
    predictions: Predictions2;
}

export interface Predictions2 {
    onTime: AmadeusRequests;
}

export interface Media {
    files: AmadeusRequests;
}

export interface EReputation {
    hotelSentiments: AmadeusRequests;
}

export interface Travel {
    analytics: Analytics;
    predictions: Predictions;
    tripParser: AmadeusRequests;
}

export interface Predictions {
    tripPurpose: AmadeusRequests;
    flightDelay: AmadeusRequests;
}

export interface Analytics {
    airTraffic: AirTraffic;
}

export interface AirTraffic {
    traveled: ByCity;
    booked: ByCity;
    busiestPeriod: ByCity;
}

export interface Booking {
    flightOrders: AmadeusRequests;
    hotelBookings: AmadeusRequests;
}

export interface Shopping {
    flightDestinations: AmadeusRequests;
    flightOffers: FlightOffers;
    flightOffersSearch: AmadeusRequests<FlightSearchResponse[]>;
    flightDates: AmadeusRequests<CheapFlightDate[]>;
    seatmaps: AmadeusRequests;
    hotelOffers: AmadeusRequests;
    hotelOffersByHotel: AmadeusRequests;
    hotelOffersSearch: AmadeusRequests;
    activities: Activities;
    availability: Availability;
}

export interface Availability {
    flightAvailabilities: AmadeusRequests;
}

export interface Activities extends AmadeusRequests<any[]> {
    bySquare: AmadeusRequests;
}

export interface FlightOffers {
    prediction: AmadeusRequests;
    pricing: AmadeusRequests;
    upselling: AmadeusRequests;
}

export interface ReferenceData {
    urls: Urls;
    locations: Locations;
    airlines: AmadeusRequests;
    recommendedLocations: AmadeusRequests;
}

export interface Locations extends AmadeusRequests<AmadeusLocation[]> {
    airports: AmadeusRequests<AmadeusLocation[]>;
    cities: AmadeusRequests<AmadeusLocation[]>;
    hotel: AmadeusRequests<AmadeusLocation[]>;
    hotels: Hotels;
    pointsOfInterest: PointsOfInterest;
}

export interface PointsOfInterest {
    bySquare: ByCity;
}

export interface Hotels {
    byCity: ByCity;
    byGeocode: ByCity;
    byHotels: ByCity;
}

export interface ByCity {
    client: Client;
}

export interface Client {
    clientId: string;
    clientSecret: string;
    logger: AmadeusRequests;
    logLevel: string;
    host: string;
    port: number;
    ssl: boolean;
    customAppId?: string;
    customAppVersion?: string;
    accessToken: AmadeusRequests;
    version: string;
}

export interface SessionCache {
    map: AmadeusRequests;
    list: unknown[];
}

export interface Options {
    noDelay: boolean;
    path?: unknown;
}

export interface Urls {
    checkinLinks: AmadeusRequests;
}

export interface CheckinLinksRequest {
    name: string;
    in: string;
    description: string;
    required: boolean;
    type: string;
    pattern: string;
}

export interface CheckinLinksResponse {
    description: string;
    schema: Schema;
}

interface Schema {
    title: string;
    required: string[];
    properties: Properties;
    example: Example;
}

interface Example {
    warnings: Warning[];
    meta: Meta;
    data: Datum[];
}

interface Datum {
    type: string;
    id: string;
    href: string;
    channel: string;
    parameters: Parameters;
}

interface Parameters {
    LAST: LAST;
    PNR: PNR;
}

interface PNR {
    description: string;
    type: string;
    format: string;
}

interface LAST {
    description: string;
    type: string;
}

interface Meta {
    count: number;
    links: Links;
}

interface Links {
    self: string;
}

interface Warning {
    status: number;
    code: number;
    title: string;
    detail: string;
    source: Source;
}

interface Source {
    parameter: string;
}

interface Properties {
    warnings: Warnings;
    meta: Items;
    data: Warnings;
}

interface Warnings {
    type: string;
    items: Items;
}

interface Items extends AmadeusRequests<any[]> {
    $ref: string;
}

export interface AmadeusRequests<TGet = any, TPost = any, T = any> {
    (id: string): Promise<AmadeusHttpResponse<T>>;
    get(request: any): Promise<AmadeusHttpResponse<TGet>>;
    post(request: any): Promise<AmadeusHttpResponse<TPost>>;
}

const AmadeusClass = require('amadeus');
export function getAmadeus(clientId: string, clientSecret: string): Amadeus {
    return new AmadeusClass({
        clientId,
        clientSecret,
    });
}

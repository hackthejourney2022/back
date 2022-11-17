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
  pagination: CheckinLinks;
  safety: Safety;
  schedule: Schedule;
  analytics: Analytics2;
  location: Location;
  dutyOfCare: DutyOfCare;
  airline: Airline;
}

export interface Airline {
  destinations: CheckinLinks;
}

export interface DutyOfCare {
  diseases: Diseases;
}

export interface Diseases {
  covid19AreaReport: CheckinLinks;
  covid19Report: CheckinLinks;
}

export interface Location {
  analytics: Analytics3;
}

export interface Analytics3 {
  categoryRatedAreas: CheckinLinks;
}

export interface Analytics2 {
  itineraryPriceMetrics: CheckinLinks;
}

export interface Schedule {
  flights: CheckinLinks;
}

export interface Safety {
  safetyRatedLocations: Activities;
}

export interface Airport {
  directDestinations: CheckinLinks;
  predictions: Predictions2;
}

export interface Predictions2 {
  onTime: CheckinLinks;
}

export interface Media {
  files: CheckinLinks;
}

export interface EReputation {
  hotelSentiments: CheckinLinks;
}

export interface Travel {
  analytics: Analytics;
  predictions: Predictions;
  tripParser: CheckinLinks;
}

export interface Predictions {
  tripPurpose: CheckinLinks;
  flightDelay: CheckinLinks;
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
  flightOrders: CheckinLinks;
  hotelBookings: CheckinLinks;
}

export interface Shopping {
  flightDestinations: CheckinLinks;
  flightOffers: FlightOffers;
  flightOffersSearch: CheckinLinks;
  flightDates: CheckinLinks;
  seatmaps: CheckinLinks;
  hotelOffers: CheckinLinks;
  hotelOffersByHotel: CheckinLinks;
  hotelOffersSearch: CheckinLinks;
  activities: Activities;
  availability: Availability;
}

export interface Availability {
  flightAvailabilities: CheckinLinks;
}

export interface Activities {
  bySquare: CheckinLinks;
}

export interface FlightOffers {
  prediction: CheckinLinks;
  pricing: CheckinLinks;
  upselling: CheckinLinks;
}

export interface ReferenceData {
  urls: Urls;
  locations: Locations;
  airlines: CheckinLinks;
  recommendedLocations: CheckinLinks;
}

export interface Locations {
  airports: CheckinLinks;
  cities: CheckinLinks;
  hotel: CheckinLinks;
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
  logger: CheckinLinks;
  logLevel: string;
  host: string;
  port: number;
  ssl: boolean;
  customAppId?: string;
  customAppVersion?: string;
  accessToken: CheckinLinks;
  version: string;
}

export interface SessionCache {
  map: CheckinLinks;
  list: unknown[];
}

export interface Options {
  noDelay: boolean;
  path?: unknown;
}

export interface Urls {
  checkinLinks: CheckinLinks;
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

interface Items {
  $ref: string;
}

export interface CheckinLinks {
  (id: string): Promise<any>;
  get(request: any): Promise<any>;
  post(request: any): Promise<any>;
}

const AmadeusClass = require('amadeus');
export function getAmadeus(clientId: string, clientSecret: string): Amadeus {
  return new AmadeusClass({
    clientId,
    clientSecret,
  });
}

export class FlightSearchResponse {
  type!: string;
  id!: string;
  source!: string;
  instantTicketingRequired!: boolean;
  nonHomogeneous!: boolean;
  oneWay!: boolean;
  lastTicketingDate!: string;
  numberOfBookableSeats!: number;
  itineraries!: Itinerary[];
  price!: Price;
  pricingOptions!: PricingOptions;
  validatingAirlineCodes!: string[];
  travelerPricings!: TravelerPricing[];
}

export class TravelerPricing {
  travelerId!: string;
  fareOption!: string;
  travelerType!: string;
  price!: Price2;
  fareDetailsBySegment!: FareDetailsBySegment[];
}

export class FareDetailsBySegment {
  segmentId!: string;
  cabin!: string;
  fareBasis!: string;
  class!: string;
  includedCheckedBags!: IncludedCheckedBags;
}

export class IncludedCheckedBags {
  quantity!: number;
}

export class Price2 {
  currency!: string;
  total!: string;
  base!: string;
}

export class PricingOptions {
  fareType!: string[];
  includedCheckedBagsOnly!: boolean;
}

export class Price {
  currency!: string;
  total!: string;
  base!: string;
  fees!: Fee[];
  grandTotal!: string;
}

export class Fee {
  amount!: string;
  type!: string;
}

export class Itinerary {
  duration!: string;
  segments!: Segment[];
}

export class Segment {
  departure!: Departure;
  arrival!: Departure;
  carrierCode!: string;
  number!: string;
  aircraft!: Aircraft;
  operating!: Operating;
  duration!: string;
  id!: string;
  numberOfStops!: number;
  blacklistedInEU!: boolean;
}

export class Operating {
  carrierCode!: string;
}

export class Aircraft {
  code!: string;
}

export class Departure {
  iataCode!: string;
  at!: string;
}

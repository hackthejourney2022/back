export class FlightDestinationsRequest {
    origin!: string;
    departureDate?: string;
    oneWay?: boolean;
    duration?: number;
    maxPrice?: number;
}

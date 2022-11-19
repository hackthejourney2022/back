export class FlightSearchRequest {
    originLocationCode!: string;
    destinationLocationCode!: string;
    departureDate!: string;
    returnDate?: string;
    adults!: number;
    children?: number;
    infants?: number;
}

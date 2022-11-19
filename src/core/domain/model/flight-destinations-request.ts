import { Type } from 'class-transformer';

export class FlightDestinationsRequest {
    origin!: string;
    departureDate?: string;
    @Type(() => Boolean)
    oneWay?: boolean;
    @Type(() => Number)
    duration?: number;
    @Type(() => Number)
    maxPrice?: number;
}

import { IATA_SIZE } from './dto-constants';
import { IsDateString, IsOptional, IsString, Length } from 'class-validator';

export class FlightDestinationsRequestDto {
    @IsString()
    @Length(IATA_SIZE, IATA_SIZE)
    origin!: string;
    @IsDateString()
    departureDate!: string;
    @IsString()
    @IsOptional()
    oneWay: string = 'false';
    @IsString()
    @IsOptional()
    duration?: string;
    @IsString()
    @IsOptional()
    maxPrice?: string;
}

import { IATA_SIZE, MAX_PASSENGERS, MIN_ADULTS, MIN_NON_ADULT_PASSENGERS } from './dto-constants';
import { IsDateString, IsOptional, IsString, Length, IsInt, Min, Max } from 'class-validator';
import { FlightSearchRequest } from 'src/core/domain/model';

export class FlightSearchRequestDto implements FlightSearchRequest {
  @IsString()
  @Length(IATA_SIZE, IATA_SIZE)
  originLocationCode!: string;
  @IsString()
  @Length(IATA_SIZE, IATA_SIZE)
  destinationLocationCode!: string;
  @IsString()
  @IsDateString()
  departureDate!: string;
  @IsString()
  @IsDateString()
  @IsOptional()
  returnDate?: string;
  @IsInt()
  @Min(MIN_ADULTS)
  @Max(MAX_PASSENGERS)
  adults!: number;
  @IsInt()
  @Min(MIN_NON_ADULT_PASSENGERS)
  @Max(MAX_PASSENGERS)
  @IsOptional()
  children?: number;
  @IsInt()
  @Min(MIN_NON_ADULT_PASSENGERS)
  @Max(MAX_PASSENGERS)
  @IsOptional()
  infants?: number;
}

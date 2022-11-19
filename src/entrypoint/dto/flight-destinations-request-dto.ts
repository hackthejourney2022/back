import {
    IsDateString,
    IsOptional,
    IsString,
    Length,
    IsEnum,
    IsNumberString,
} from 'class-validator';
import { IATA_SIZE, STRING_BOOLEAN } from './dto-constants';

export class FlightDestinationsRequestDto {
    @IsString()
    @Length(IATA_SIZE, IATA_SIZE)
    origin!: string;
    @IsDateString()
    @IsOptional()
    departureDate?: string;
    @IsString()
    @IsEnum(STRING_BOOLEAN)
    @IsOptional()
    oneWay?: string;
    @IsNumberString()
    @IsOptional()
    duration?: string;
    @IsNumberString()
    @IsOptional()
    maxPrice?: string;
}

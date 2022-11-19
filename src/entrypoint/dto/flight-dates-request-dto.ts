import { FlightDateRequest } from './../../core/domain/model/flight-date-request';
import { IATA_SIZE } from './dto-constants';
import { IsString, Length } from 'class-validator';

export class FlightDateRequestDto implements FlightDateRequest {
    @IsString()
    @Length(IATA_SIZE, IATA_SIZE)
    origin!: string;
    @IsString()
    @Length(IATA_SIZE, IATA_SIZE)
    destination!: string;
}

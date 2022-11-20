import { FlightDateRequest } from '../../../core/domain/model/flight-date-request';
import { FlightDateRequestDto, FlightSearchRequestDto } from '../../dto';
import { FlightShoppingService } from '../../../core/domain/service/flight-shopping-service';
import {
    FlightDestinationsRequest,
    FlightSearchRequest,
} from 'src/core/domain/model';
import {
    Body,
    Controller,
    Get,
    Post,
    HttpStatus,
    HttpCode,
    Query,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { FlightDestinationsRequestDto } from 'src/entrypoint/dto/flight-destinations-request-dto';

@Controller('/shopping')
export class FlightShoppingController {
    constructor(private readonly service: FlightShoppingService) {}

    @Post('/flights')
    @HttpCode(HttpStatus.OK)
    public async getFlights(@Body() request: FlightSearchRequestDto) {
        return this.service.getOffers(
            plainToInstance(FlightSearchRequest, request),
        );
    }

    @Post('/summary-flights')
    @HttpCode(HttpStatus.OK)
    public async getSummarizedFlights(@Body() request: FlightSearchRequestDto) {
        return this.service.getSummarizedFlights(
            plainToInstance(FlightSearchRequest, request),
        );
    }

    @Get('/flight-dates')
    public async getFlightDates(@Query() request: FlightDateRequestDto) {
        return this.service.getFlightDates(
            plainToInstance(FlightDateRequest, request),
        );
    }

    @Get('/flight-destinations')
    public async getFlightDestinations(
        @Query() request: FlightDestinationsRequestDto,
    ) {
        const value: FlightDestinationsRequest = {
            // departureDate: request.departureDate,
            // oneWay: request.oneWay === 'true',
            origin: request.origin,
            // ...(request.duration ? { duration: Number(request.duration) } : {}),
            // ...(request.maxPrice ? { maxPrice: Number(request.maxPrice) } : {}),
        };

        return this.service.getFlightDestinations(
            plainToInstance(FlightDestinationsRequest, value),
        );
    }
}

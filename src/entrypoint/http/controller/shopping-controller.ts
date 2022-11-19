import { FlightDateRequest } from './../../../core/domain/model/flight-date-request';
import { FlightDateRequestDto, FlightSearchRequestDto } from './../../dto';
import { FlightShoppingService } from './../../../core/domain/service/flight-shopping-service';
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
import { fluent } from '@codibre/fluent-iterable';

const maxResults = 3;
@Controller('/shopping')
export class ShoppingController {
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
    public async getSummaryFlights(@Body() request: FlightSearchRequestDto) {
        const flights = await this.service.getOffers(
            plainToInstance(FlightSearchRequest, request),
        );
        return fluent(flights)
            .map((x) => {
                const firstSegment = x.itineraries[0].segments[0];
                const lastSegment = fluent(x.itineraries[0].segments).last()!;
                return {
                    type: x.type,
                    airline: firstSegment.carrierCode,
                    itinerary: {
                        from: firstSegment.departure.iataCode,
                        to: lastSegment.departure.iataCode,
                        departureDate: firstSegment.departure.at,
                        returnDate: x.itineraries[1]?.segments[0].departure.at,
                    },
                    price: x.price.total,
                };
            })
            .sortBy((x) => x.price)
            .take(maxResults)
            .toArray();
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

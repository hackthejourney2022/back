import { FlightDateRequest } from './../../../core/domain/model/flight-date-request';
import { FlightDateRequestDto, FlightSearchRequestDto } from './../../dto';
import { FlightShoppingService } from './../../../core/domain/service/flight-shopping-service';
import { FlightSearchRequest } from 'src/core/domain/model';
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

  @Get('/flight-dates')
  public async getFlightDates(@Query() request: FlightDateRequestDto) {
    return this.service.getFlightDates(
      plainToInstance(FlightDateRequest, request),
    );
  }
}

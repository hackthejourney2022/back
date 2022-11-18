import { FlightSearchRequestDto } from './../../dto';
import { FlightShoppingService } from './../../../core/domain/service/flight-shopping-service';
import { FlightSearchRequest } from 'src/core/domain/model';
import { Body, Controller, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

@Controller('/shopping')
export class ShoppingController {
  constructor(private readonly service: FlightShoppingService) {}

  @Post('/flights')
  public async getFlights(@Body() request: FlightSearchRequestDto) {
    return this.service.getLocation(plainToInstance(FlightSearchRequest, request));
  }
}

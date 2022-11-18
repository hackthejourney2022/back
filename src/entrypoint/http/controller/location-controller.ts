import { PlaceQueryDto } from './../../dto/place-query-dto';
import { Coordinates } from 'src/core/domain/model';
import { CoordinatesDto } from 'src/entrypoint/dto';
import { Controller, Get, Query } from '@nestjs/common';
import { LocationService } from 'src/core/domain/service';
import { plainToInstance } from 'class-transformer';

@Controller('/location')
export class LocationController {
  constructor(private readonly service: LocationService) {}

  @Get('/coordinates')
  public async getByCoordinates(@Query() request: CoordinatesDto) {
    return this.service.getLocation(plainToInstance(Coordinates, request));
  }

  @Get('/text')
  public async getByText(@Query() request: PlaceQueryDto) {
    const result = this.service.getLocationByText(request.search);

    return result.toArray();
  }

  @Get('/safety-rates')
  public async getSafetyRates(@Query() request: CoordinatesDto) {
    return this.service.getSafetyRates(plainToInstance(Coordinates, request));
  }

  @Get('/category-rated-areas')
  public async getCategoryRatedAreas(@Query() request: CoordinatesDto) {
    return this.service.getCategoryRatedAreas(
      plainToInstance(Coordinates, request),
    );
  }
}

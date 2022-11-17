import { LocationRequest } from 'src/core/domain/model';
import { LocationRequestDto } from 'src/entrypoint/dto';
import { Controller, Get, Query } from '@nestjs/common';
import { BaseSampleService } from 'src/core/domain/service/base-sample-service';
import { plainToInstance } from 'class-transformer';

@Controller('/sample')
export class LocationController {
  constructor(private readonly service: BaseSampleService) {}

  @Get()
  public async getSamples(@Query() request: LocationRequestDto) {
    const result = await this.service.getLocation(
      plainToInstance(LocationRequest, request),
    );
    return result.toArray();
  }
}

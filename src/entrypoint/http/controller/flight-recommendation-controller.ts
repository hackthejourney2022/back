import { FlightRecommendationService } from './../../../core/domain/service/flight-recomendation-service';
import { FlightDestinationsRequest } from 'src/core/domain/model';
import { Controller, HttpStatus, HttpCode, Query, Get } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { FlightDestinationsRequestDto } from 'src/entrypoint/dto/flight-destinations-request-dto';

@Controller('/recommendation')
export class FlightRecommendationController {
    constructor(private readonly service: FlightRecommendationService) {}

    @Get('/flight')
    @HttpCode(HttpStatus.OK)
    public async getFlights(@Query() request: FlightDestinationsRequestDto) {
        return this.service.get(
            plainToInstance(FlightDestinationsRequest, request),
        );
    }
}

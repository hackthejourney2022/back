import { MemoryReviewsRepository } from './repository/memory-reviews-repository';
import { ReviewsRepository } from 'src/core/domain/repository/reviews-repository';
import { ApiAmadeusSafePlaceClient } from './client/amadeus/api-amadeus-safe-place-client';
import { SafePlaceClient } from 'src/core/domain/client/safe-place-client';
import {
    AirportsClient,
    FlightShoppingClient,
    GeocoderClient,
    LocationScoreClient,
} from 'src/core/domain/client';
import { GeneralCache } from './cache/general-cache';
import { CacheConfig } from './cache/cache-config';
import { HttpNominatimClient } from './client/nominatim/http-nominatim-client';
import { NominatimConfig } from './client/nominatim/nominatim-config';
import { Module } from '@nestjs/common';
import { SampleRepository } from 'src/core/domain/repository/sample-repository';
import {
    ApiAmadeusAirportsClient,
    ApiAmadeusFlightShoppingClient,
    getAmadeus,
} from './client/amadeus';
import { RedisSample } from './repository/redis-sample';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
    ConfigTypes,
    HttpServerConfig,
    loadConfiguration,
} from './load-configuration';
import { RedisConfig } from './repository';
import { configGetter } from './config-getter';
import { AmadeusConfig } from './client/amadeus/amadeus-config';
import { RedisSampleRepository } from './repository/redis-sample-repository';
import { AppLogger } from 'src/core/domain/utils';
import { logger } from './logger';
import { ApiAmadeusGeocoderClient } from './client/amadeus/api-amadeus-geocoder-client';
import { ApiAmadeusLocationScoreClient } from 'src/infrastructure/client/amadeus/api-amadeus-location-score-client';
import { VolunteeringInstitutionRepository } from 'src/core/domain/repository/volunteering-institution-repository';
import { MemoryVolunteeringInstitutionRepository } from 'src/infrastructure/repository/memory-volunteering-institution-repository';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [loadConfiguration],
        }),
    ],
    providers: [
        // clients
        {
            provide: AirportsClient,
            useClass: ApiAmadeusAirportsClient,
        },
        {
            provide: FlightShoppingClient,
            useClass: ApiAmadeusFlightShoppingClient,
        },
        {
            provide: GeocoderClient,
            // useClass: NominatimGeocoderClient,
            useClass: ApiAmadeusGeocoderClient,
        },
        {
            provide: LocationScoreClient,
            useClass: ApiAmadeusLocationScoreClient,
        },
        {
            provide: SafePlaceClient,
            useClass: ApiAmadeusSafePlaceClient,
        },
        // Repositories
        {
            provide: ReviewsRepository,
            useClass: MemoryReviewsRepository,
        },
        {
            provide: SampleRepository,
            useClass: RedisSampleRepository,
        },
        {
            provide: VolunteeringInstitutionRepository,
            useClass: MemoryVolunteeringInstitutionRepository,
        },
        // Configs
        {
            provide: RedisConfig,
            useFactory: configGetter(ConfigTypes.sampleRedis),
            inject: [ConfigService],
        },
        {
            provide: HttpServerConfig,
            useFactory: configGetter(ConfigTypes.httpServer),
            inject: [ConfigService],
        },
        {
            provide: AmadeusConfig,
            useFactory: configGetter(ConfigTypes.amadeus),
            inject: [ConfigService],
        },
        {
            provide: NominatimConfig,
            useFactory: configGetter(ConfigTypes.nominatim),
            inject: [ConfigService],
        },
        {
            provide: CacheConfig,
            useFactory: configGetter(ConfigTypes.cache),
            inject: [ConfigService],
        },
        // Base clients
        {
            provide: 'AMADEUS',
            useFactory: (x: AmadeusConfig) =>
                getAmadeus(x.clientId, x.clientSecret),
            inject: [AmadeusConfig],
        },
        {
            provide: RedisSample,
            useFactory: (config: RedisConfig) =>
                new RedisSample(config.url, config.options),
            inject: [RedisConfig],
        },
        HttpNominatimClient,
        GeneralCache,
        // Logger
        {
            provide: AppLogger,
            useValue: logger,
        },
    ],
    exports: [
        AirportsClient,
        AppLogger,
        FlightShoppingClient,
        GeocoderClient,
        LocationScoreClient,
        ReviewsRepository,
        SafePlaceClient,
        SampleRepository,
        VolunteeringInstitutionRepository,
    ],
})
export class InfrastructureModule {}

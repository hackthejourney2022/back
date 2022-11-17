import { GeneralCache } from './cache/general-cache';
import { CacheConfig } from './cache/cache-config';
import { NominatimGeocoderClient } from './client/nominatim/nominatim-geocoder-client';
import { GeocoderClient } from 'src/core/domain/client/geocoder-client';
import { HttpNominatimClient } from './client/nominatim/http-nominatim-client';
import { NominatimConfig } from './client/nominatim/nominatim-config';
import { AirportsClient } from 'src/core/domain/client';
import { Module } from '@nestjs/common';
import { SampleRepository } from 'src/core/domain/repository/sample-repository';
import { ApiAmadeusClient, getAmadeus } from './client/amadeus';
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
      useClass: ApiAmadeusClient,
    },
    {
      provide: GeocoderClient,
      useClass: NominatimGeocoderClient,
    },
    // Repositories
    {
      provide: SampleRepository,
      useClass: RedisSampleRepository,
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
      useFactory: (x: AmadeusConfig) => getAmadeus(x.clientId, x.clientSecret),
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
  exports: [AirportsClient, GeocoderClient, SampleRepository, AppLogger],
})
export class InfrastructureModule {}
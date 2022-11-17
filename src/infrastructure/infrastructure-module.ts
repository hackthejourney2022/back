import { AmadeusClient } from 'src/core/domain/client';
import { Module } from '@nestjs/common';
import { SampleRepository } from 'src/core/domain/repository/sample-repository';
import { ApiAmadeusClient } from './client/api-amadeus-client';
import { RedisSample } from './repository/redis-sample';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  ConfigTypes,
  HttpServerConfig,
  loadConfiguration,
} from './load-configuration';
import { RedisConfig } from './repository';
import { configGetter } from './config-getter';
import { getAmadeus } from './client/base-amadeus-client';
import { AmadeusConfig } from './client/amadeus-config';
import { RedisSampleRepository } from './repository/redis-sample-repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [loadConfiguration],
    }),
  ],
  providers: [
    {
      provide: AmadeusClient,
      useClass: ApiAmadeusClient,
    },
    {
      provide: SampleRepository,
      useClass: RedisSampleRepository,
    },
    {
      provide: RedisSample,
      useFactory: (config: RedisConfig) =>
        new RedisSample(config.url, config.options),
      inject: [RedisConfig],
    },
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
      provide: 'AMADEUS',
      useFactory: (x: AmadeusConfig) => getAmadeus(x.clientId, x.clientSecret),
      inject: [AmadeusConfig],
    },
  ],
  exports: [AmadeusClient, SampleRepository],
})
export class InfrastructureModule {}

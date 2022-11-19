import { CacheConfig } from './cache/cache-config';
import { NominatimConfig } from './client/nominatim/nominatim-config';
import { fluentObject } from '@codibre/fluent-iterable';
import ms from 'ms';
import { RedisConfig } from './repository';
import { AmadeusConfig } from './client/amadeus/amadeus-config';

export enum ConfigTypes {
    httpServer = 'httpServer',
    sampleRedis = 'sampleRedis',
    amadeus = 'amadeus',
    nominatim = 'nominatim',
    cache = 'cache',
}

export class HttpServerConfig {
    port!: number;
    keepAliveTimeout!: number;
}

export interface Config {
    [ConfigTypes.httpServer]: HttpServerConfig;
    [ConfigTypes.sampleRedis]: RedisConfig;
    [ConfigTypes.amadeus]: AmadeusConfig;
    [ConfigTypes.nominatim]: NominatimConfig;
    [ConfigTypes.cache]: CacheConfig;
}
const REDIS_SCALE = 1000;
const config: Config = {
    [ConfigTypes.httpServer]: {
        port: 3000,
        keepAliveTimeout: ms('2m'),
    },
    [ConfigTypes.sampleRedis]: {
        url: 'redis://localhost:6379',
        options: {
            password: undefined,
        },
    },
    [ConfigTypes.amadeus]: {
        clientId: '',
        clientSecret: '',
    },
    [ConfigTypes.nominatim]: {
        url: 'https://nominatim.openstreetmap.org',
        timeout: ms('10s'),
        logRequests: false,
    },
    [ConfigTypes.cache]: {
        ttl: 0,
        redisTtl: ms('24h') / REDIS_SCALE,
        redisPrefix: 'hack-the-journey-2022-cache',
    },
};

export async function loadConfiguration(): Promise<Config> {
    const { env } = process;
    const newConfig: Config = {
        [ConfigTypes.httpServer]: {
            port: Number(env.HTTP_PORT) || config[ConfigTypes.httpServer].port,
            keepAliveTimeout: env.KEEP_ALIVE_TIMEOUT
                ? ms(env.KEEP_ALIVE_TIMEOUT)
                : config[ConfigTypes.httpServer].keepAliveTimeout,
        },
        [ConfigTypes.sampleRedis]: {
            url: env.REDIS_URL ?? config[ConfigTypes.sampleRedis].url,
            options: {
                password:
                    env.REDIS_PASSWORD ||
                    config[ConfigTypes.sampleRedis].options.password,
            },
        },
        [ConfigTypes.amadeus]: {
            clientId:
                env.AMADEUS_CLIENT_ID ?? config[ConfigTypes.amadeus].clientId,
            clientSecret:
                env.AMADEUS_CLIENT_SECRET ??
                config[ConfigTypes.amadeus].clientSecret,
        },
        [ConfigTypes.nominatim]: {
            url: env.NOMINATIM_CONFIG ?? config[ConfigTypes.nominatim].url,
            timeout:
                Number(env.NOMINATIM_TIMEOUT) ??
                config[ConfigTypes.nominatim].timeout,
            logRequests: env.NOMINATIM_LOG_REQUESTS
                ? env.NOMINATIM_LOG_REQUESTS === 'true'
                : config[ConfigTypes.nominatim].logRequests,
        },
        [ConfigTypes.cache]: {
            ttl: env.REDIS_CACHE_TTL
                ? ms(env.REDIS_CACHE_TTL) / REDIS_SCALE
                : config[ConfigTypes.cache].ttl,
            redisTtl: env.REDIS_CACHE_TTL
                ? ms(env.REDIS_CACHE_TTL) / REDIS_SCALE
                : config[ConfigTypes.cache].redisTtl,
        },
    };
    fluentObject(config).forEach(([k]) => {
        Object.assign(config[k], newConfig[k]);
    });

    return config;
}

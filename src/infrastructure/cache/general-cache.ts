import { RedisSample } from './../repository/redis-sample';
import { CacheConfig } from './cache-config';
import { Injectable } from '@nestjs/common';
import { RememberedRedis } from '@remembered/redis';

@Injectable()
export class GeneralCache extends RememberedRedis {
  constructor(config: CacheConfig, redis: RedisSample) {
    super(config, redis);
  }
}

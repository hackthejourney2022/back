import { NominatimConfig } from './nominatim-config';
import { BaseHttpClient, Logger, Methods } from 'ts-base-http-client';
import { Inject } from '@nestjs/common';
import { AppLogger } from 'src/core/domain/utils';

export class HttpNominatimClient extends BaseHttpClient {
    constructor(config: NominatimConfig, @Inject(AppLogger) logger: Logger) {
        super(config, logger);
    }

    req(method: Methods, resource: string, contentType?: string) {
        return super
            .req(method, resource, contentType)
            .set('User-Agent', 'Hack-the-journey-2022-client');
    }
}

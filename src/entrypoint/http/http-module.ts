import {
    Module,
    NestModule,
    MiddlewareConsumer,
    RequestMethod,
} from '@nestjs/common';
import { coreModules } from 'src/core/core-module';
import { InfrastructureModule } from 'src/infrastructure/infrastructure-module';
import * as controllers from './controller';
import * as filters from './exception-filter';
import {
    RequestContextMiddleware,
    RequestLoggerMiddleware,
} from './middleware';
@Module({
    imports: [InfrastructureModule],
    controllers: Object.values(controllers),
    providers: [...coreModules, ...Object.values(filters)],
})
export class HttpModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer
            .apply(RequestContextMiddleware)
            .forRoutes('*')
            .apply(RequestLoggerMiddleware)
            .exclude({ path: 'health-check', method: RequestMethod.ALL })
            .forRoutes('*');
    }
}

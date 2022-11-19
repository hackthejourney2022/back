import { Logger } from 'ts-base-http-client';

export interface LoggerMetadata {
    unhandledError: string;
    warnError: string;
    requestPath: string;
    responseStatusCode: number;
    responseTime: number;
    originIp: string;
    userAgent: string;
    ommitedError: string[];
}
export class AppLogger implements Logger {
    error!: (message: string, meta?: unknown) => Logger;
    warn!: (message: string, meta?: unknown) => Logger;
    info!: (message: string, meta?: unknown) => Logger;
    verbose!: (message: string, meta?: unknown) => Logger;
    debug!: (message: string, meta?: unknown) => Logger;
    silly!: (message: string, meta?: unknown) => Logger;
}

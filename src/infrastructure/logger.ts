import { AppLogger } from 'src/core/domain/utils';
import winston from 'winston';

const baseLogger = winston.createLogger();
baseLogger.add(
    new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            winston.format.printf((info) => {
                const { message, timestamp, level, ...meta } = info;
                return `${timestamp} ${level}: ${message} meta: ${JSON.stringify(
                    meta,
                )}`;
            }),
        ),
    }),
);

export const logger = baseLogger as unknown as AppLogger;

import { Amadeus } from './base-amadeus-client';
import {
    depaginate,
    FluentAsyncIterable,
    fluentAsync,
} from '@codibre/fluent-iterable';

export function depaginateAmadeus(
    amadeus: Amadeus,
    req: (payload: object) => Promise<any>,
    request: object,
    maxResults?: number,
): FluentAsyncIterable<any> {
    let count = 0;
    let result = fluentAsync(
        depaginate(async (last: any) => {
            if (
                !last ||
                (maxResults &&
                    last.result.meta.links.next &&
                    count < maxResults)
            ) {
                const body = await (last ? amadeus.next(last) : req(request));
                count += body.data.length;
                return {
                    results: body.data,
                    nextPageToken: body,
                };
            }

            return undefined;
        }),
    );
    if (maxResults && maxResults < Number.POSITIVE_INFINITY) {
        result = result.take(maxResults);
    }
    return result;
}

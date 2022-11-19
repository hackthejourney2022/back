import { treatTimeout } from 'src/core/domain/utils/treat-timeout';
import { getErrorMessage } from 'src/core/domain/utils/get-error-message';
import { AppLogger } from 'src/core/domain/utils';
import ms from 'ms';

export async function amadeusFallback<T>(
    callback: () => PromiseLike<T>,
    logger: AppLogger,
    fallback: () => any,
    routine: string,
    timeout = ms('5s'),
) {
    try {
        return await treatTimeout(callback, routine, timeout);
    } catch (err) {
        logger.error(getErrorMessage(err));
        // logger.incTextMeta('ommitedError', getErrorMessage(err));
        return fallback();
    }
}

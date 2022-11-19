import { getErrorMessage } from 'src/core/domain/utils/get-error-message';
import { AppLogger } from 'src/core/domain/utils';

export async function amadeusFallback<T>(
    callback: () => PromiseLike<T>,
    logger: AppLogger,
    fallback: any,
) {
    try {
        return await callback();
    } catch (err) {
        logger.incTextMeta('ommitedError', getErrorMessage(err));
        return fallback;
    }
}

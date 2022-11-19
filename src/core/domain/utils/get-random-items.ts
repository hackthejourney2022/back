import { AppLogger } from 'src/core/domain/utils';
import { arrayShuffle } from './array-shuffle';

export function getRandomItems<T>(
    items: T[],
    numberOfItemsByResult: number,
    logger: AppLogger,
    routine: string,
) {
    logger.info(`Selecting random results for ${routine}`);
    const selectItems: T[] = arrayShuffle(items);

    const result = selectItems.slice(0, numberOfItemsByResult);

    logger.info(`Finished selecting random results for ${routine}`);

    return result;
}

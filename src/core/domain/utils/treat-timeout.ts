import { promisify } from 'util';

const wait = promisify(setTimeout);

export function treatTimeout<T>(
    cb: () => PromiseLike<T>,
    routine: string,
    timeout: number,
) {
    let finished = false;
    async function run() {
        try {
            return await cb();
        } finally {
            finished = true;
        }
    }
    return Promise.race([
        run(),
        wait(timeout).then(() => {
            if (!finished) {
                throw new Error(`Timeout on ${routine}`);
            }
        }),
    ]);
}

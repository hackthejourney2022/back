import { randomInt } from '.';

export function getRandomItems<T>(
    institutions: T[],
    numberOfItemsByResult: number,
) {
    const itensSelected: number[] = [];
    const selectInstitutions: T[] = [];
    const totalOfInstitutions: number = institutions.length - 1;

    for (let index = 0; index < numberOfItemsByResult; index++) {
        let seletedItem: number = randomInt(0, totalOfInstitutions);

        while (itensSelected.indexOf(seletedItem) > -1) {
            seletedItem = randomInt(0, totalOfInstitutions);
        }
        itensSelected.push(seletedItem);

        selectInstitutions.push(institutions[seletedItem]);
    }

    return selectInstitutions;
}

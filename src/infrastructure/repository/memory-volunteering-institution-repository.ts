import { Injectable } from '@nestjs/common';
import { VolunteeringInstitution, Coordinates } from 'src/core/domain/model';
import { VolunteeringInstitutionRepository } from 'src/core/domain/repository/volunteering-institution-repository';
import { GeneralCache } from 'src/infrastructure/cache';
import { volunteeringInstitutions } from 'src/infrastructure/repository/volunteering-Institution-mock';

@Injectable()
export class MemoryVolunteeringInstitutionRepository
    implements VolunteeringInstitutionRepository
{
    constructor(private cache: GeneralCache) {
        this.get = this.cache.wrap(
            this.get.bind(this),
            (req, maxResults) =>
                `getVolunteeringInstitutio:${req.latitude}:${req.longitude}:${maxResults}`,
        );
    }

    async get(
        _request: Coordinates,
        _maxResults?: number | undefined,
    ): Promise<VolunteeringInstitution[]> {
        return this._selectRandomInstitutions(volunteeringInstitutions);
    }

    _selectRandomInstitutions(
        institutions: VolunteeringInstitution[],
    ): VolunteeringInstitution[] {
        const itensSelected: number[] = [];
        const numberOfItemsByResult: number = 2;
        const selectInstitutions: VolunteeringInstitution[] = [];
        const totalOfInstitutions: number = institutions.length - 1;

        for (let index = 0; index < numberOfItemsByResult; index++) {
            let seletedItem: number = this._randomInteger(
                0,
                totalOfInstitutions,
            );

            while (itensSelected.indexOf(seletedItem) > -1) {
                seletedItem = this._randomInteger(0, totalOfInstitutions);
            }
            itensSelected.push(seletedItem);

            selectInstitutions.push(institutions[seletedItem]);
        }

        return selectInstitutions;
    }

    _randomInteger(minimum: number, maximum: number): number {
        if (maximum === undefined) {
            maximum = minimum;
            minimum = 0;
        }

        if (typeof minimum !== 'number' || typeof maximum !== 'number') {
            throw new TypeError('Expected all arguments to be numbers');
        }

        return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
    }
}

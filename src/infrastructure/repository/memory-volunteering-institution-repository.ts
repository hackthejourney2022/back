import { Injectable } from '@nestjs/common';
import { VolunteeringInstitution, Coordinates } from 'src/core/domain/model';
import { VolunteeringInstitutionRepository } from 'src/core/domain/repository/volunteering-institution-repository';
import { getRandomItems, AppLogger } from 'src/core/domain/utils';
import { GeneralCache } from 'src/infrastructure/cache';
import { volunteeringInstitutions } from 'src/infrastructure/repository/volunteering-Institution-mock';

const TOTAL_INSTITUTIONS = 2;
@Injectable()
export class MemoryVolunteeringInstitutionRepository
    implements VolunteeringInstitutionRepository
{
    constructor(private cache: GeneralCache, private logger: AppLogger) {
        this.get = this.cache.wrap(
            this.get.bind(this),
            (req, maxResults) =>
                `getVolunteeringInstitution:${req.latitude}:${req.longitude}:${maxResults}`,
            (x) => !x,
        );
    }

    async get(
        _request: Coordinates,
        flags: { sponsor: boolean },
        _maxResults?: number | undefined,
    ): Promise<VolunteeringInstitution[]> {
        if (flags.sponsor) {
            return getRandomItems(
                volunteeringInstitutions,
                TOTAL_INSTITUTIONS,
                this.logger,
                'getVolunteeringInstitution',
            );
        }
        flags.sponsor = true;
        return [
            volunteeringInstitutions[0],
            ...getRandomItems(
                volunteeringInstitutions.slice(1),
                TOTAL_INSTITUTIONS - 1,
                this.logger,
                'getVolunteeringInstitution',
            ),
        ];
    }
}

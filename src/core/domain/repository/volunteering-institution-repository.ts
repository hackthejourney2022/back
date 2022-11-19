import { VolunteeringInstitution, Coordinates } from 'src/core/domain/model';

export abstract class VolunteeringInstitutionRepository {
    abstract get(
        request: Coordinates,
        flags: { sponsor: boolean },
        maxResults?: number,
    ): Promise<VolunteeringInstitution[]>;
}

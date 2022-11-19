import { VolunteeringInstitution, Coordinates } from 'src/core/domain/model';

export abstract class VolunteeringInstitutionRepository {
    abstract get(
        request: Coordinates,
        maxResults?: number,
    ): Promise<VolunteeringInstitution[]>;
}

import { LocationRequest } from '../model/location-request';

export abstract class SampleRepository {
  abstract getAll(): Promise<LocationRequest[]>;
  abstract getById(sampleId: string): Promise<LocationRequest | null>;
  abstract create(sample: LocationRequest): Promise<string>;
  abstract delete(sampleId: number): Promise<void>;
}

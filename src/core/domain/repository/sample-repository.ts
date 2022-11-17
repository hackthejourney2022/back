import { Coordinates } from '../model/coordinates';

export abstract class SampleRepository {
  abstract getAll(): Promise<Coordinates[]>;
  abstract getById(sampleId: string): Promise<Coordinates | null>;
  abstract create(sample: Coordinates): Promise<string>;
  abstract delete(sampleId: number): Promise<void>;
}

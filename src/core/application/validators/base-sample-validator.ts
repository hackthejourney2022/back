import { Injectable } from '@nestjs/common';
import { LocationRequest } from 'src/core/domain/model';

@Injectable()
export class BaseSampleValidator {
  validateSampleId(sampleId: string): boolean {
    return !!sampleId;
  }

  async validateParams(_params: LocationRequest): Promise<void> {
    // no validation
  }
}

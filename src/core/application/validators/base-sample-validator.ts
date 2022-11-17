import { Injectable } from '@nestjs/common';
import { Coordinates } from 'src/core/domain/model';

@Injectable()
export class BaseSampleValidator {
  validateSampleId(sampleId: string): boolean {
    return !!sampleId;
  }

  async validateParams(_params: Coordinates): Promise<void> {
    // no validation
  }
}

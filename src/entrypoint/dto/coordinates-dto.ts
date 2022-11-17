import { Coordinates } from 'src/core/domain/model';
import { IsString } from 'class-validator';

export class CoordinatesDto implements Coordinates {
  @IsString()
  longitude!: string;
  @IsString()
  latitude!: string;
}

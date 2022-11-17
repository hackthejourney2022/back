import { LocationRequest } from 'src/core/domain/model';
import { IsString } from 'class-validator';

export class LocationRequestDto implements LocationRequest {
  @IsString()
  longitude!: string;
  @IsString()
  latitude!: string;
}

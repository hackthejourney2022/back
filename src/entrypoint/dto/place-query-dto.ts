import { IsString } from 'class-validator';

export class PlaceQueryDto {
  @IsString()
  search!: string;
}

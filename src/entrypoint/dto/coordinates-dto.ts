import { IsString } from 'class-validator';

export class CoordinatesDto {
    @IsString()
    longitude!: string;
    @IsString()
    latitude!: string;
}

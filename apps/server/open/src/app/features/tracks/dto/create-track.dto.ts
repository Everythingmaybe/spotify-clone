import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTrackFilesDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: [Express.Multer.File];
  @ApiProperty({ type: 'string', format: 'binary', required: false })
  image?: [Express.Multer.File];

  constructor(partial: Partial<CreateTrackFilesDto>) {
    Object.assign(this, partial);
  }
}
export class CreateTrackDto {
  @ApiProperty()
  @IsNotEmpty()
  title: string;
  @ApiProperty()
  @IsNotEmpty()
  artistIds: string[];

  constructor(partial: Partial<CreateTrackDto>) {
    Object.assign(this, partial);
  }
}

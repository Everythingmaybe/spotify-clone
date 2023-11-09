import { IsNotEmpty } from 'class-validator';
import { Express } from 'express';
import { Multer } from 'multer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArtistFilesDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  avatar: [Express.Multer.File];
  @ApiProperty({ type: 'string', format: 'binary' })
  banner: [Express.Multer.File];
}

export class CreateArtistDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

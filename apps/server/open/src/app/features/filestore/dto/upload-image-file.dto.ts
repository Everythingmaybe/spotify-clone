import { ApiProperty } from '@nestjs/swagger';
import { UploadImageParamsDto } from './upload-image-params.dto';

export class UploadImageFileDto extends UploadImageParamsDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: Express.Multer.File;
}

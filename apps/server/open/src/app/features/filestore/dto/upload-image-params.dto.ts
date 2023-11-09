import { ApiProperty } from '@nestjs/swagger';

export class UploadImageParamsDto {
  @ApiProperty({ required: false })
  width?: number;
  @ApiProperty({ required: false })
  height?: number;
}

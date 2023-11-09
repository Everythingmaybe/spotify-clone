import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  HttpStatus,
  Param,
  Post,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { FilestoreService } from './filestore.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/auth.guard';
import { UploadImageFileDto } from './dto/upload-image-file.dto';
import { UploadAudioFileDto } from './dto/upload-audio-file.dto';
import { UploadImageParamsDto } from './dto/upload-image-params.dto';

@ApiTags('Filestore')
@ApiBearerAuth()
@Controller('filestore')
export class FilestoreController {
  constructor(private readonly filestore: FilestoreService) {}
  @Public()
  @Header('Cache-Control', 'max-age=3600')
  @Get('image/:id')
  getImage(@Param('id') id: string, @Res({ passthrough: true }) res: Response) {
    res.contentType('webp');

    return new StreamableFile(this.filestore.getImage(id)).setErrorHandler(
      () => {}
    );
  }

  @Post('image')
  @ApiBody({ type: UploadImageFileDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() params?: UploadImageParamsDto
  ) {
    return this.filestore.saveImage(file, params);
  }
  @Public()
  @Get('audio/:id')
  @Header('Accept-Ranges', 'bytes')
  @Header('Content-Type', 'audio/mpeg')
  async getAudio(
    @Param('id') id: string,
    @Res({ passthrough: true }) res: Response,
    @Headers() headers: any
  ) {
    const range = headers.range;
    const { length: size } = await this.filestore.getFileInfo(id);
    let params: { start: number; end?: number };

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : size - 1;
      const chunksize = end - start + 1;
      const head = {
        'Content-Range': `bytes ${start}-${end}/${size}`,
        'Content-Length': chunksize,
      };
      res.writeHead(HttpStatus.PARTIAL_CONTENT, head);
      params = { start, end: end + 1 };
    } else {
      res.writeHead(HttpStatus.OK, { 'Content-Length': size });
    }

    return new StreamableFile(this.filestore.getAudio(id, params));
  }

  @Post('audio')
  @ApiBody({ type: UploadAudioFileDto })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  uploadAudio(@UploadedFile() file: Express.Multer.File) {
    return this.filestore.saveAudio(file);
  }
}

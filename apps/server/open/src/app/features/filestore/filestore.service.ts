import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import {
  MongoClient,
  GridFSBucket,
  ObjectId,
  GridFSBucketReadStreamOptions,
} from 'mongodb';
import { Readable } from 'stream';
import { UploadImageParamsDto } from './dto/upload-image-params.dto';
import { ImagesService } from '../../shared/modules/images/images.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FilestoreService implements OnModuleInit, OnModuleDestroy {
  private readonly client = new MongoClient(
    this.config.get('FILESTORE_DATABASE_URL')
  );
  private readonly db = this.client.db();
  private readonly bucket = new GridFSBucket(this.db, {
    bucketName: 'filestore',
  });

  constructor(
    private readonly imagesService: ImagesService,
    private readonly config: ConfigService
  ) {}
  async onModuleInit() {
    await this.client.connect();
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  async saveImage(
    file: Express.Multer.File,
    params?: UploadImageParamsDto
  ): Promise<string> {
    const processedFile = await this.imagesService.processImage(
      file.buffer,
      'webp',
      params
    );
    return (
      this.config.get('FILESTORE_URL') +
      '/image/' +
      Readable.from(processedFile)
        .pipe(this.bucket.openUploadStream('image'))
        .id.toString()
    );
  }
  getImage(id: string) {
    return this.bucket.openDownloadStream(new ObjectId(id));
  }

  async saveAudio(file: Express.Multer.File): Promise<string> {
    const processedFile = file.buffer;
    return (
      this.config.get('FILESTORE_URL') +
      '/audio/' +
      Readable.from(processedFile)
        .pipe(this.bucket.openUploadStream('audio'))
        .id.toString()
    );
  }

  getAudio(id: string, params?: GridFSBucketReadStreamOptions) {
    return this.bucket.openDownloadStream(new ObjectId(id), params);
  }

  getFileInfo(id: string) {
    return this.bucket.find({ _id: new ObjectId(id) }, { limit: 1 }).next();
  }
}

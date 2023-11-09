import { Module } from '@nestjs/common';
import { FilestoreService } from './filestore.service';
import { FilestoreController } from './filestore.controller';
import { ImagesModule } from '../../shared/modules/images/images.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ImagesModule, ConfigModule],
  providers: [FilestoreService],
  exports: [FilestoreService],
  controllers: [FilestoreController],
})
export class FilestoreModule {}

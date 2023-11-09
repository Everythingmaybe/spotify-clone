import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksController } from './tracks.controller';
import { TracksRepository } from './tracks.repository';
import { DatabaseModule } from '../../shared/modules/database/database.module';
import { FilestoreModule } from '../filestore/filestore.module';
import { ImagesModule } from '../../shared/modules/images/images.module';

@Module({
  imports: [DatabaseModule, FilestoreModule, ImagesModule],
  providers: [TracksService, TracksRepository],
  controllers: [TracksController],
  exports: [TracksService],
})
export class TracksModule {}

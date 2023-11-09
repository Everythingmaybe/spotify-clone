import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { ArtistsRepository } from './artists.repository';
import { DatabaseModule } from '../../shared/modules/database/database.module';
import { FilestoreModule } from '../filestore/filestore.module';
import { ImagesModule } from '../../shared/modules/images/images.module';

@Module({
  imports: [DatabaseModule, FilestoreModule, ImagesModule],
  providers: [ArtistsService, ArtistsRepository],
  controllers: [ArtistsController],
})
export class ArtistsModule {}

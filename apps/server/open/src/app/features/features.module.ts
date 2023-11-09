import { Module } from '@nestjs/common';
import { PlayerStateModule } from './player-state/player-state.module';
import { AuthModule } from './auth/auth.module';
import { ArtistsModule } from './artists/artists.module';
import { FilestoreModule } from './filestore/filestore.module';
import { TracksModule } from './tracks/tracks.module';
@Module({
  imports: [
    AuthModule,
    PlayerStateModule,
    ArtistsModule,
    FilestoreModule,
    TracksModule,
  ],
})
export class FeaturesModule {}

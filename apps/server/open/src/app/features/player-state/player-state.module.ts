import { Module } from '@nestjs/common';
import { PlayerStateController } from './player-state.controller';
import { PlayerStateService } from './player-state.service';
import { TracksModule } from '../tracks/tracks.module';

@Module({
  imports: [TracksModule],
  controllers: [PlayerStateController],
  providers: [PlayerStateService],
})
export class PlayerStateModule {}

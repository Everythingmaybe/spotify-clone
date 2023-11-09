import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { PlayerStateActionType } from '@spotify-clone/client-api-open';

@Component({
  selector: 'sp-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent {
  public readonly playerService = inject(PlayerService);

  changeVolume(value: number) {
    this.playerService
      .action({
        type: PlayerStateActionType.Volume,
        payload: value,
      })
      .subscribe();
  }

  play(value: boolean) {
    this.playerService
      .action({
        type: value
          ? PlayerStateActionType.Resume
          : PlayerStateActionType.Pause,
      })
      .subscribe();
  }

  playTrack(id: string) {
    this.playerService
      .action({
        type: PlayerStateActionType.PlayTrack,
        payload: id,
      })
      .subscribe();
  }

  changeCurrentTime(value: number) {
    this.playerService
      .action({
        type: PlayerStateActionType.Time,
        payload: value,
      })
      .subscribe();
  }

  setActiveDevice(id: string) {
    this.playerService
      .action({
        type: PlayerStateActionType.SetActiveDevice,
        payload: id,
      })
      .subscribe();
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { PlayerService } from '../../../services/player.service';
import { PlayerStateActionType } from '@spotify-clone/client-api-open';
import { switchMap, take } from 'rxjs';

@Component({
  selector: 'sp-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerControlsComponent {
  public readonly playerService = inject(PlayerService);

  @Input()
  disabled = false;

  changeCurrentTime(time: number) {
    this.playerService
      .action({ type: PlayerStateActionType.Time, payload: time })
      .subscribe();
  }

  resume() {
    this.playerService.isPlaying$
      .pipe(
        take(1),
        switchMap((isPlaying) =>
          isPlaying
            ? this.playerService.action({ type: PlayerStateActionType.Pause })
            : this.playerService.action({ type: PlayerStateActionType.Resume })
        )
      )
      .subscribe();
  }

  repeat() {
    this.playerService
      .action({ type: PlayerStateActionType.Repeat })
      .subscribe();
  }
}

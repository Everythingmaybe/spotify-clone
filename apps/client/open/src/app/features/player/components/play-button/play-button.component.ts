import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { PlayerService } from '../../services/player.service';
import {
  combineLatest,
  distinctUntilChanged,
  map,
  switchMap,
  take,
} from 'rxjs';
import { PlayerStateActionType } from '@spotify-clone/client-api-open';

@Component({
  selector: 'sp-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayButtonComponent {
  private readonly playerService = inject(PlayerService);

  @Input({ required: true })
  id!: string;

  public readonly isActiveTrack$ = this.playerService.trackId$.pipe(
    map((id) => id === this.id),
    distinctUntilChanged()
  );

  public readonly currentIsPlaying$ = combineLatest([
    this.isActiveTrack$,
    this.playerService.isPlaying$,
  ]).pipe(
    map(([isCurrentTrack, isPlaying]) => isPlaying && isCurrentTrack),
    distinctUntilChanged()
  );

  onClick(currentIsPlaying: boolean) {
    this.isActiveTrack$
      .pipe(
        take(1),
        switchMap((isActiveTrack) =>
          isActiveTrack
            ? this.playerService.action({
                type: currentIsPlaying
                  ? PlayerStateActionType.Pause
                  : PlayerStateActionType.Resume,
              })
            : this.playerService.action({
                type: PlayerStateActionType.PlayTrack,
                payload: this.id,
              })
        )
      )
      .subscribe();
  }
}

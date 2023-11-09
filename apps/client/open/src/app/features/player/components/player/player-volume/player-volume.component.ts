import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IconButtonComponent,
  IconComponent,
  ProgressBarComponent,
} from '@spotify-clone/ui-kit';
import { PlayerService } from '../../../services/player.service';
import { PlayerStateActionType } from '@spotify-clone/client-api-open';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'sp-player-volume',
  standalone: true,
  imports: [
    IconButtonComponent,
    IconComponent,
    FormsModule,
    AsyncPipe,
    ProgressBarComponent,
  ],
  templateUrl: './player-volume.component.html',
  styleUrls: ['./player-volume.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerVolumeComponent {
  public readonly playerService = inject(PlayerService);

  changeVolume(value: number) {
    // this.playerService
    //   .action({
    //     type: PlayerStateActionType.PlayTrack,
    //     payload: '651007bdd10702687dcb6edf',
    //   })
    //   .subscribe();
    this.playerService
      .action({
        type: PlayerStateActionType.Volume,
        payload: value,
      })
      .subscribe();
  }
}

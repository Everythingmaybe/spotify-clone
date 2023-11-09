import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent, IconComponent } from '@spotify-clone/ui-kit';
import { PlayerService } from '../../../services/player.service';
import { PlayerStateActionType } from '@spotify-clone/client-api-open';

@Component({
  selector: 'sp-player-devices',
  standalone: true,
  imports: [CommonModule, IconButtonComponent, IconComponent],
  templateUrl: './player-devices.component.html',
  styleUrls: ['./player-devices.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerDevicesComponent {
  public readonly playerService = inject(PlayerService);

  public show = false;

  setActiveDevice(id: string) {
    this.playerService
      .action({
        type: PlayerStateActionType.SetActiveDevice,
        payload: id,
      })
      .subscribe();
  }
}

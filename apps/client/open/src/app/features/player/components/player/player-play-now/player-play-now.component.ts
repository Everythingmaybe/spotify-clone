import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconButtonComponent, IconComponent } from '@spotify-clone/ui-kit';
import { PlayNowService } from '../../../../play-now/play-now.service';

@Component({
  selector: 'sp-player-play-now',
  standalone: true,
  imports: [IconButtonComponent, IconComponent],
  templateUrl: './player-play-now.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerPlayNowComponent {
  public readonly playNowService = inject(PlayNowService);
}

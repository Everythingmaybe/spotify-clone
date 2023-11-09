import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TrackDto } from '@spotify-clone/client-api-open';

@Component({
  selector: 'sp-player-track-info',
  templateUrl: './player-track-info.component.html',
  styleUrls: ['./player-track-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerTrackInfoComponent {
  @Input()
  track?: TrackDto;
}

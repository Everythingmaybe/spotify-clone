import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { ArtistTrackDto } from '@spotify-clone/client-api-open';
import { AsyncPipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { IconComponent, LetDirective } from '@spotify-clone/ui-kit';
import { RouterLink } from '@angular/router';
import { PlayerModule } from '../../../player/player.module';
import { PlayerService } from '../../../player/services/player.service';

@Component({
  selector: 'sp-track-list',
  standalone: true,
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgForOf,
    IconComponent,
    NgOptimizedImage,
    NgIf,
    RouterLink,
    PlayerModule,
    LetDirective,
    AsyncPipe,
  ],
})
export class TrackListComponent {
  public readonly playerService = inject(PlayerService);

  @Input({ required: true })
  tracks: ArtistTrackDto[] = [];
}

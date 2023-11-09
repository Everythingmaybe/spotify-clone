import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { ArtistDto, ArtistsApiService } from '@spotify-clone/client-api-open';
import {
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  ImageComponent,
  IntersectionObserverDirective,
} from '@spotify-clone/ui-kit';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { PlayerModule } from '../../features/player/player.module';
import { TrackListComponent } from '../../features/tracks/components/track-list/track-list.component';
import { TopMenuContentDirective } from '../../features/top-menu/components/top-menu-content/top-menu-content.directive';
import { TopMenuBackgroundColorService } from '../../features/top-menu/components/top-menu-background/top-menu-background-color.service';
import { TopMenuBackgroundOpacityTriggerDirective } from '../../features/top-menu/components/top-menu-background/top-menu-background-opacity-trigger.directive';

@Component({
  selector: 'sp-artist',
  standalone: true,
  templateUrl: './artist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    NgOptimizedImage,
    ImageComponent,
    NgIf,
    PlayerModule,
    TrackListComponent,
    TopMenuContentDirective,
    IntersectionObserverDirective,
    TopMenuBackgroundOpacityTriggerDirective,
  ],
})
export class ArtistComponent {
  private readonly artistsApiService = inject(ArtistsApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly topMenuBackground = inject(TopMenuBackgroundColorService);

  @Input({ required: true })
  artistDetails!: ArtistDto;

  public readonly id$: Observable<string> = this.route.params.pipe(
    map(({ id }) => id),
    distinctUntilChanged()
  );

  public artistDetails$ = this.id$.pipe(
    switchMap((id) =>
      this.artistsApiService
        .artistsControllerGetArtistById({ id })
        .pipe(startWith(null))
    ),
    tap((artist) => this.topMenuBackground.next(artist?.color))
  );

  public hideTopMenuContent = true;
}

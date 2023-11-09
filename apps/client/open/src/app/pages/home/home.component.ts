import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ArtistsApiService } from '@spotify-clone/client-api-open';
import { ArtistCardComponent } from '../../features/artists/components/artist-card/artist-card.component';
import { AsyncPipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { CardSkeletonComponent } from '../../shared/components/card-skeleton/card-skeleton.component';
import { TopMenuBackgroundColorService } from '../../features/top-menu/components/top-menu-background/top-menu-background-color.service';
import { TopMenuBackgroundOpacityTriggerDirective } from '../../features/top-menu/components/top-menu-background/top-menu-background-opacity-trigger.directive';

@Component({
  selector: 'sp-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ArtistCardComponent,
    NgForOf,
    AsyncPipe,
    NgOptimizedImage,
    NgIf,
    CardSkeletonComponent,
    TopMenuBackgroundOpacityTriggerDirective,
  ],
})
export class HomeComponent implements OnInit {
  private readonly artistApi = inject(ArtistsApiService);

  public readonly topMenuBackground = inject(TopMenuBackgroundColorService);
  public readonly artists$ = this.artistApi.artistsControllerGetArtistList();

  public readonly homeTopMenuColor = 'rgb(72, 80, 72)';

  ngOnInit() {
    this.topMenuBackground.next(this.homeTopMenuColor);
  }
}

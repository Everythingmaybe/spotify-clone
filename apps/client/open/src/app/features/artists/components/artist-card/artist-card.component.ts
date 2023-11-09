import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ArtistListItemDto } from '@spotify-clone/client-api-open';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import {
  CardActionsComponent,
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardImageComponent,
  ImageComponent,
} from '@spotify-clone/ui-kit';
import { PlayerModule } from '../../../player/player.module';

@Component({
  selector: 'sp-artist-card',
  standalone: true,
  templateUrl: './artist-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    NgOptimizedImage,
    ImageComponent,
    CardComponent,
    CardHeaderComponent,
    CardImageComponent,
    CardActionsComponent,
    CardContentComponent,
    PlayerModule,
  ],
})
export class ArtistCardComponent {
  @Input({ required: true })
  artist!: ArtistListItemDto;
}

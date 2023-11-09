import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IconButtonComponent,
  IconComponent,
  ImageComponent,
} from '@spotify-clone/ui-kit';
import { PlayNowService } from './play-now.service';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'sp-play-now',
  standalone: true,
  templateUrl: './play-now.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IconButtonComponent,
    NgIf,
    IconComponent,
    NgOptimizedImage,
    ImageComponent,
    NgForOf,
    RouterLink,
  ],
})
export class PlayNowComponent {
  public readonly playNowService = inject(PlayNowService);
}

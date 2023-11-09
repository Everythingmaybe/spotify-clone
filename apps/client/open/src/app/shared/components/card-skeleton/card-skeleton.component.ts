import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
  CardImageComponent,
} from '@spotify-clone/ui-kit';

@Component({
  selector: 'sp-card-skeleton',
  standalone: true,
  templateUrl: './card-skeleton.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CardComponent,
    CardHeaderComponent,
    CardImageComponent,
    CardContentComponent,
  ],
})
export class CardSkeletonComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-card-image',
  standalone: true,
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardImageComponent {}

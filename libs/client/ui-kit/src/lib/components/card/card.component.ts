import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}

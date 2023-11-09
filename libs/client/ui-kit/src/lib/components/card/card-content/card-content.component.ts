import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-card-content',
  standalone: true,
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContentComponent {}

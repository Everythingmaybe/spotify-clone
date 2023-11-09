import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-card-header',
  standalone: true,
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeaderComponent {}

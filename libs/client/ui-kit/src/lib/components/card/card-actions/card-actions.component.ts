import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-card-actions',
  standalone: true,
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardActionsComponent {}

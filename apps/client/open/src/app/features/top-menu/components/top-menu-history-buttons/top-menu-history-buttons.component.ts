import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconButtonComponent, IconComponent } from '@spotify-clone/ui-kit';
import { HistoryService } from '@spotify-clone/ui-kit';

@Component({
  selector: 'sp-top-menu-history-buttons',
  standalone: true,
  templateUrl: './top-menu-history-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconButtonComponent, IconComponent],
})
export class TopMenuHistoryButtonsComponent {
  public readonly historyService = inject(HistoryService);
}

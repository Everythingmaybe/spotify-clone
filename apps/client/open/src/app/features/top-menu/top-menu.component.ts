import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopMenuHistoryButtonsComponent } from './components/top-menu-history-buttons/top-menu-history-buttons.component';
import { TopMenuBackgroundComponent } from './components/top-menu-background/top-menu-background.component';
import { TopMenuUserComponent } from './components/top-menu-user/top-menu-user.component';
import { TopMenuContentComponent } from './components/top-menu-content/top-menu-content.component';
import { IntersectionObserverDirective } from '@spotify-clone/ui-kit';

@Component({
  selector: 'sp-top-menu',
  standalone: true,
  templateUrl: './top-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TopMenuHistoryButtonsComponent,
    TopMenuBackgroundComponent,
    TopMenuUserComponent,
    TopMenuContentComponent,
    IntersectionObserverDirective,
  ],
})
export class TopMenuComponent {}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from '../../../features/main-menu/main-menu.component';
import { IconButtonComponent, ScrollbarComponent } from '@spotify-clone/ui-kit';
import { ButtonComponent, IconComponent } from '@spotify-clone/ui-kit';
import { RouterOutlet } from '@angular/router';
import { PlayNowComponent } from '../../../features/play-now/play-now.component';
import { PlayNowService } from '../../../features/play-now/play-now.service';
import { TopMenuComponent } from '../../../features/top-menu/top-menu.component';
import { FooterComponent } from '../../../features/footer/footer.component';

@Component({
  selector: 'sp-layout',
  standalone: true,
  imports: [
    CommonModule,
    MainMenuComponent,
    IconButtonComponent,
    IconComponent,
    ButtonComponent,
    RouterOutlet,
    PlayNowComponent,
    TopMenuComponent,
    ScrollbarComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  public readonly playNowService = inject(PlayNowService);
}

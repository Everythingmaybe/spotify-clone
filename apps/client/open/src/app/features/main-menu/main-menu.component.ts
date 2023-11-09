import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '@spotify-clone/ui-kit';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'sp-main-menu',
  standalone: true,
  templateUrl: './main-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent, RouterLinkActive, NgForOf],
})
export class MainMenuComponent {
  public readonly links = [
    {
      path: '/',
      name: 'Главная',
      icon: 'home',
    },
    {
      path: '/search',
      name: 'Поиск',
      icon: 'search',
    },
  ];
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TopMenuBackgroundColorService } from './top-menu-background-color.service';
import { AsyncPipe } from '@angular/common';
import { TopMenuBackgroundOpacityService } from './top-menu-background-opacity.service';

@Component({
  selector: 'sp-top-menu-background',
  standalone: true,
  templateUrl: './top-menu-background.component.html',
  styleUrls: ['./top-menu-background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
})
export class TopMenuBackgroundComponent {
  protected readonly topMenuBackground$ = inject(TopMenuBackgroundColorService);
  protected readonly topMenuBackgroundOpacity$ = inject(
    TopMenuBackgroundOpacityService
  );
}

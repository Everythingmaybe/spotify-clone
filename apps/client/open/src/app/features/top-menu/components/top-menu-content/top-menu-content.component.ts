import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TopMenuContentService } from './top-menu-content.service';
import { PortalModule } from '@angular/cdk/portal';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'sp-top-menu-content',
  standalone: true,
  templateUrl: './top-menu-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PortalModule, AsyncPipe],
})
export class TopMenuContentComponent {
  protected readonly topMenuContentService = inject(TopMenuContentService);
}

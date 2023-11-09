import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostBinding,
  inject,
  Input,
} from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { IconName } from './icons';
import { IconService } from './icon.service';
import { take } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'sp-icon',
  standalone: true,
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ``,
})
export class IconComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly iconService = inject(IconService);
  @Input({ required: true })
  set name(value: IconName) {
    this.iconService
      .getIcon(value)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe((svg) => (this.html = svg));
  }

  @HostBinding('innerHtml')
  private html?: SafeHtml;
}

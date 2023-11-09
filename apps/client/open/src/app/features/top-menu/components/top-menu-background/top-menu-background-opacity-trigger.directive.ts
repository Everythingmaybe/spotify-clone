import {
  DestroyRef,
  Directive,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IntersectionObserverDirective } from '@spotify-clone/ui-kit';
import { TopMenuBackgroundOpacityService } from './top-menu-background-opacity.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[spTopMenuBackgroundOpacityTrigger]',
  standalone: true,
  hostDirectives: [IntersectionObserverDirective],
})
export class TopMenuBackgroundOpacityTriggerDirective
  implements OnInit, OnDestroy
{
  private readonly intersectionObserverDirective = inject(
    IntersectionObserverDirective,
    { self: true }
  );
  private readonly topMenuBackgroundOpacityService = inject(
    TopMenuBackgroundOpacityService
  );
  private readonly destroyRef = inject(DestroyRef);
  ngOnInit() {
    this.intersectionObserverDirective.options = {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    this.intersectionObserverDirective.eventEmitter
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ intersectionRatio }) => {
        this.topMenuBackgroundOpacityService.next(1 - intersectionRatio);
      });

    this.intersectionObserverDirective.init();
  }

  ngOnDestroy() {
    this.topMenuBackgroundOpacityService.next(0);
  }
}

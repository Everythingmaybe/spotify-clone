import {
  DestroyRef,
  Directive,
  inject,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { TopMenuContentService } from './top-menu-content.service';

@Directive({
  selector: '[spTopMenuContent]',
  standalone: true,
})
export class TopMenuContentDirective implements OnInit {
  private readonly topMenuContentService = inject(TopMenuContentService);
  private readonly vcr = inject(ViewContainerRef);
  private readonly templateRef = inject(TemplateRef, { self: true });
  private readonly destroyRef = inject(DestroyRef, { skipSelf: true });

  ngOnInit() {
    this.topMenuContentService.next(
      new TemplatePortal(this.templateRef, this.vcr)
    );

    this.destroyRef.onDestroy(() => {
      this.topMenuContentService.next(null);
    });
  }
}

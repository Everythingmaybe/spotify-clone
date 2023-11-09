import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[spIntersectionObserver]',
  standalone: true,
})
export class IntersectionObserverDirective
  implements OnInit, OnDestroy, OnChanges
{
  private readonly elementRef = inject(ElementRef, { self: true });
  private observer!: IntersectionObserver;

  @Input('spIntersectionObserverOptions')
  options?: IntersectionObserverInit;

  @Output('spIntersectionObserver')
  eventEmitter = new EventEmitter<IntersectionObserverEntry>();

  ngOnChanges() {
    this.init();
  }

  ngOnInit() {
    this.init();
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  init() {
    this.observer?.disconnect();
    this.observer = new IntersectionObserver((entries) => {
      this.eventEmitter.emit(entries[0]);
    }, this.options);
    this.observer.observe(this.elementRef.nativeElement);
  }
}

import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[spResizeObserver]',
  standalone: true,
})
export class ResizeObserverDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef);
  private readonly observer: ResizeObserver = new ResizeObserver(([entry]) => {
    this.eventEmitter.emit(entry);
  });

  @Output('spResizeObserver')
  eventEmitter = new EventEmitter<ResizeObserverEntry>();

  ngOnInit() {
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}

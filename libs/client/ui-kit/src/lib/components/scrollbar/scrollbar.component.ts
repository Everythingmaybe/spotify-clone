import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, merge, startWith } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ResizeObserverDirective } from '../../directives';

@Component({
  selector: 'sp-scrollbar',
  standalone: true,
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ResizeObserverDirective],
})
export class ScrollbarComponent {
  // private readonly destroyRef = inject(DestroyRef);
  // public readonly cdr = inject(ChangeDetectorRef);
  //
  // @ViewChild('content', { read: ElementRef, static: true })
  // content!: ElementRef;
  //
  // @ViewChild('scrollbarY', { read: ElementRef, static: true })
  // scrollbarY!: ElementRef;
  //
  // @ViewChild('scrollbarX', { read: ElementRef, static: true })
  // scrollbarX!: ElementRef;
  //
  // ngOnInit() {
  //   merge(
  //     fromEvent(this.content.nativeElement, 'scroll'),
  //     fromEvent(this.scrollbarX.nativeElement, 'scroll'),
  //     fromEvent(this.scrollbarY.nativeElement, 'scroll')
  //   )
  //     .pipe(startWith(undefined), takeUntilDestroyed(this.destroyRef))
  //     .subscribe(() => {
  //       this.cdr.detectChanges();
  //     });
  // }

  test(e: any) {
    console.log(e);
  }
}

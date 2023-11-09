import {
  booleanAttribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  numberAttribute,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize, fromEvent, mergeMap, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'sp-progress-bar',
  standalone: true,
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class ProgressBarComponent implements OnInit {
  private readonly cdr = inject(ChangeDetectorRef);

  @Input({ transform: numberAttribute })
  min = 0;

  @Input({ transform: numberAttribute })
  max = 100;

  @Input({ transform: numberAttribute })
  value = this.min;

  @Input({ transform: booleanAttribute })
  disabled = false;

  @Input()
  updateOn: 'change' | 'blur' = 'change';

  @Output()
  valueChange = new EventEmitter<number>();

  @ViewChild('progressBar', { read: ElementRef, static: true })
  progressBarElementRef!: ElementRef<HTMLElement>;

  get valuePercents(): number {
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  ngOnInit() {
    const down$ = fromEvent(
      this.progressBarElementRef.nativeElement,
      'mousedown'
    );
    const move$ = fromEvent<MouseEvent>(document, 'mousemove');
    const up$ = fromEvent(document, 'mouseup');

    down$
      .pipe(
        mergeMap(() =>
          move$.pipe(
            tap((e) => {
              this.calcValueFromEvent(e);
              this.updateOn === 'change' && this.onChange();
            }),
            finalize(() => this.onChange()),
            takeUntil(up$)
          )
        )
      )
      .subscribe();
  }

  onChange() {
    this.valueChange.emit(this.value);
  }

  onClick(event: MouseEvent) {
    this.calcValueFromEvent(event);
    this.onChange();
  }

  calcValueFromEvent(event: MouseEvent) {
    const { x } =
      this.progressBarElementRef.nativeElement.getBoundingClientRect();
    const part =
      (event.x - x) / this.progressBarElementRef.nativeElement.clientWidth;
    this.value = Math.max(
      Math.min((this.max - this.min) * part + this.min, this.max),
      this.min
    );
    this.cdr.markForCheck();
  }
}

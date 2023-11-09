import {
  Directive,
  Inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

export class LetContext<T> {
  constructor(private readonly dir: LetDirective<T>) {}

  get spLet(): T {
    return this.dir.spLet;
  }
}

@Directive({
  selector: '[spLet]',
  standalone: true,
})
export class LetDirective<T> {
  @Input()
  spLet!: T;

  constructor(
    @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
    @Inject(TemplateRef) templateRef: TemplateRef<LetContext<T>>
  ) {
    viewContainer.createEmbeddedView(templateRef, new LetContext<T>(this));
  }
}

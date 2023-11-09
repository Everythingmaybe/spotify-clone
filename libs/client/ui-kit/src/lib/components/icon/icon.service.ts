import { inject, Injectable } from '@angular/core';
import { IconName, ICONS } from './icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  private readonly sanitizer = inject(DomSanitizer);

  private readonly icons: Map<IconName, SafeHtml> = new Map<
    IconName,
    SafeHtml
  >();

  constructor() {
    Object.entries(ICONS).forEach(([key, value]) => this.addIcon(key, value));
  }

  getIcon(name: IconName) {
    return this.icons.has(name)
      ? of(this.icons.get(name))
      : throwError(() => new Error(`Cannot find icon: ${name}`));
  }

  addIcon(name: string, svg: string) {
    this.icons.set(name, this.sanitizer.bypassSecurityTrustHtml(svg));
  }
}

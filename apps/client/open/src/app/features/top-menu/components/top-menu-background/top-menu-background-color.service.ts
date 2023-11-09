import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopMenuBackgroundColorService extends BehaviorSubject<
  string | null | undefined
> {
  constructor() {
    super(null);
  }
}

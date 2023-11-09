import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopMenuBackgroundOpacityService extends BehaviorSubject<number> {
  constructor() {
    super(0);
  }
}

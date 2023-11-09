import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Portal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root',
})
export class TopMenuContentService extends BehaviorSubject<Portal<any> | null> {
  constructor() {
    super(null);
  }
}

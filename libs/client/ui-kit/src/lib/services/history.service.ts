import { inject, Injectable } from '@angular/core';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private readonly location = inject(Location);

  forward() {
    this.location.forward();
  }

  back() {
    this.location.back();
  }
}

import { Pipe, PipeTransform } from '@angular/core';

const DEFAULT_TIME_VALUE = '-:--';

@Pipe({
  name: 'time',
  standalone: true,
})
export class TimePipe implements PipeTransform {
  transform(value?: number | null): string {
    if (value === null || value === undefined || isNaN(value))
      return DEFAULT_TIME_VALUE;
    return `${Math.floor(value / 60)
      .toString()
      .padStart(1, '0')}:${Math.round(value % 60)
      .toString()
      .padStart(2, '0')}`;
  }
}

import { Observable } from 'rxjs';
import { inject, NgZone } from '@angular/core';

export function fromEventSource(
  url: string,
  zone = inject(NgZone)
): Observable<MessageEvent> {
  return new Observable<MessageEvent>((subscriber) => {
    const sse = new EventSource(url, { withCredentials: true });

    sse.onmessage = (e) => {
      zone.run(() => {
        subscriber.next(e);
      });
    };
    sse.onerror = (e) => {
      zone.run(() => {
        subscriber.error(e);
      });
    };

    return () => {
      if (sse.readyState === 1) {
        sse.close();
      }
    };
  });
}

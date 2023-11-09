import { inject, Injectable, signal } from '@angular/core';
import { PlayerService } from '../player/services/player.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class PlayNowService {
  private readonly playerService = inject(PlayerService);

  public readonly show = signal(false);
  public readonly track = toSignal(this.playerService.track$, {
    initialValue: null,
  });

  toggle(value = !this.show()) {
    this.show.set(value);
  }
}

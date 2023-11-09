import { inject, Injectable, NgZone } from '@angular/core';
import {
  ApiConfiguration,
  PlayerStateActionDto,
  PlayerStateActionType,
  PlayerStateApiService,
  TrackDto,
} from '@spotify-clone/client-api-open';
import {
  catchError,
  combineLatest,
  distinctUntilChanged,
  EMPTY,
  filter,
  fromEvent,
  interval,
  map,
  merge,
  NEVER,
  Observable,
  of,
  retry,
  retryWhen,
  scan,
  share,
  shareReplay,
  skip,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { fromEventSource } from '../../../shared/providers/from-event-source';
import { Router } from '@angular/router';

export interface PlayerState {
  track?: TrackDto;
  isPlaying: boolean;
  currentTime: number;
  isRepeating: boolean;
  volume: number;
  activeDeviceId?: string | null;
  currentDevice: Device;
  devices: Device[];
}

export interface Device {
  id: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class PlayerService {
  private readonly playerApiService = inject(PlayerStateApiService);
  private readonly apiConfig = inject(ApiConfiguration);
  private readonly authService = inject(AuthService);
  private readonly zone = inject(NgZone);

  public readonly playerElement = document.createElement('audio');

  // TODO
  public readonly state$: Observable<PlayerState> = this.loadPlayerState().pipe(
    catchError(() =>
      this.authService
        .refreshAccessToken()
        .pipe(switchMap(() => this.loadPlayerState()))
    ),
    map((m) => JSON.parse(m.data)),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  public loadPlayerState() {
    return fromEventSource(
      `${this.apiConfig.rootUrl}${PlayerStateApiService.PlayerStateControllerStatePath}?accessToken=${this.authService.accessToken}`,
      this.zone
    );
  }

  readonly isPlaying$ = this.state$.pipe(
    map((s) => s.isPlaying),
    distinctUntilChanged()
  );

  readonly isRepeating$ = this.state$.pipe(
    map((s) => s.isRepeating),
    distinctUntilChanged()
  );

  readonly volume$ = this.state$.pipe(
    map((s) => s.volume / 100),
    distinctUntilChanged(),
    tap((volume) => {
      this.playerElement.volume = volume;
    })
  );

  readonly track$ = this.state$.pipe(
    map((s) => s.track),
    distinctUntilChanged()
  );

  readonly trackId$ = this.track$.pipe(
    map((track) => track?.id),
    distinctUntilChanged()
  );

  readonly currentDevice$ = this.state$.pipe(map((s) => s.currentDevice));

  readonly currentDeviceId$ = this.currentDevice$.pipe(
    map((d) => d.id),
    distinctUntilChanged()
  );

  readonly activeDeviceId$ = this.state$.pipe(
    map((s) => s.activeDeviceId),
    distinctUntilChanged()
  );

  readonly currentDeviceIsActive$ = combineLatest([
    this.currentDeviceId$,
    this.activeDeviceId$,
  ]).pipe(
    map(([a, b]) => a === b),
    distinctUntilChanged()
  );

  readonly devices$ = this.state$.pipe(map((s) => s.devices));

  readonly trackSrc$ = this.track$.pipe(
    map((s) => s?.file || ''),
    distinctUntilChanged()
  );

  readonly currentTime$ = fromEvent(this.playerElement, 'timeupdate').pipe(
    map(() => this.playerElement.currentTime),
    distinctUntilChanged()
  );

  readonly currentTimeChange$ = this.state$.pipe(
    map((s) => s.currentTime),
    distinctUntilChanged()
  );

  readonly trackEnded$ = fromEvent(this.playerElement, 'ended');

  constructor() {
    combineLatest([this.volume$, this.isPlaying$]).subscribe((c) => {});

    this.trackSrc$
      .pipe(
        tap((src) => (this.playerElement.src = src)),
        switchMap(() => fromEvent(this.playerElement, 'canplaythrough')),
        switchMap(() =>
          combineLatest([this.isPlaying$, this.currentDeviceIsActive$])
        ),
        map(([a, b]) => a && b)
      )
      .subscribe((isPlaying) => {
        isPlaying ? this.playerElement.play() : this.playerElement.pause();
      });

    this.trackEnded$
      .pipe(
        switchMap(() => this.isRepeating$.pipe(take(1))),
        switchMap((isRepeating) =>
          isRepeating
            ? this.action({ type: PlayerStateActionType.RepeatTrack })
            : this.action({ type: PlayerStateActionType.Pause })
        )
      )
      .subscribe();

    merge(this.currentTimeChange$)
      .pipe(
        switchMap((t) =>
          this.currentDeviceIsActive$.pipe(
            tap((c) => console.log(t, c)),
            switchMap((currentDeviceIsActive) =>
              currentDeviceIsActive
                ? of(t)
                : combineLatest([this.isPlaying$]).pipe(
                    switchMap(([a]) => (a ? timer(0, 1000) : NEVER)),
                    scan((acc) => acc + 1, t)
                  )
            )
          )
        )
      )
      .subscribe((n) => {
        this.playerElement.currentTime = n;
      });
  }

  action(data: PlayerStateActionDto) {
    return this.playerApiService.playerStateControllerAction({ body: data });
  }
}

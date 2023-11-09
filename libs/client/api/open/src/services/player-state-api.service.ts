/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { playerStateControllerAction } from '../fn/player-state/player-state-controller-action';
import { PlayerStateControllerAction$Params } from '../fn/player-state/player-state-controller-action';
import { playerStateControllerState } from '../fn/player-state/player-state-controller-state';
import { PlayerStateControllerState$Params } from '../fn/player-state/player-state-controller-state';
import { PlayerStateMessageDto } from '../models/player-state-message-dto';

@Injectable({ providedIn: 'root' })
export class PlayerStateApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `playerStateControllerState()` */
  static readonly PlayerStateControllerStatePath = '/api/player-state';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `playerStateControllerState()` instead.
   *
   * This method doesn't expect any request body.
   */
  playerStateControllerState$Response(params?: PlayerStateControllerState$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerStateMessageDto>> {
    return playerStateControllerState(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `playerStateControllerState$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  playerStateControllerState(params?: PlayerStateControllerState$Params, context?: HttpContext): Observable<PlayerStateMessageDto> {
    return this.playerStateControllerState$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayerStateMessageDto>): PlayerStateMessageDto => r.body)
    );
  }

  /** Path part for operation `playerStateControllerAction()` */
  static readonly PlayerStateControllerActionPath = '/api/player-state';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `playerStateControllerAction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  playerStateControllerAction$Response(params: PlayerStateControllerAction$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return playerStateControllerAction(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `playerStateControllerAction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  playerStateControllerAction(params: PlayerStateControllerAction$Params, context?: HttpContext): Observable<void> {
    return this.playerStateControllerAction$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

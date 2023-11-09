/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PlayerStateMessageDto } from '../../models/player-state-message-dto';

export interface PlayerStateControllerState$Params {
}

export function playerStateControllerState(http: HttpClient, rootUrl: string, params?: PlayerStateControllerState$Params, context?: HttpContext): Observable<StrictHttpResponse<PlayerStateMessageDto>> {
  const rb = new RequestBuilder(rootUrl, playerStateControllerState.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PlayerStateMessageDto>;
    })
  );
}

playerStateControllerState.PATH = '/api/player-state';

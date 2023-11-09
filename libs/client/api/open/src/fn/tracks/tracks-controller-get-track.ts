/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TrackDto } from '../../models/track-dto';

export interface TracksControllerGetTrack$Params {
  id: string;
}

export function tracksControllerGetTrack(http: HttpClient, rootUrl: string, params: TracksControllerGetTrack$Params, context?: HttpContext): Observable<StrictHttpResponse<TrackDto>> {
  const rb = new RequestBuilder(rootUrl, tracksControllerGetTrack.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TrackDto>;
    })
  );
}

tracksControllerGetTrack.PATH = '/api/tracks/{id}';

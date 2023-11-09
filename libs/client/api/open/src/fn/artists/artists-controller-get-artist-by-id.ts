/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArtistDto } from '../../models/artist-dto';

export interface ArtistsControllerGetArtistById$Params {
  id: string;
}

export function artistsControllerGetArtistById(http: HttpClient, rootUrl: string, params: ArtistsControllerGetArtistById$Params, context?: HttpContext): Observable<StrictHttpResponse<ArtistDto>> {
  const rb = new RequestBuilder(rootUrl, artistsControllerGetArtistById.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ArtistDto>;
    })
  );
}

artistsControllerGetArtistById.PATH = '/api/artists/{id}';

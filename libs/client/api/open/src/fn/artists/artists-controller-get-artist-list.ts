/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArtistListItemDto } from '../../models/artist-list-item-dto';

export interface ArtistsControllerGetArtistList$Params {
}

export function artistsControllerGetArtistList(http: HttpClient, rootUrl: string, params?: ArtistsControllerGetArtistList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArtistListItemDto>>> {
  const rb = new RequestBuilder(rootUrl, artistsControllerGetArtistList.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ArtistListItemDto>>;
    })
  );
}

artistsControllerGetArtistList.PATH = '/api/artists';

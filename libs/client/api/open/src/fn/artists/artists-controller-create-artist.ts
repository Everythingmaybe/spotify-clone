/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ArtistDto } from '../../models/artist-dto';
import { CreateArtistDto } from '../../models/create-artist-dto';

export interface ArtistsControllerCreateArtist$Params {
      body: CreateArtistDto
}

export function artistsControllerCreateArtist(http: HttpClient, rootUrl: string, params: ArtistsControllerCreateArtist$Params, context?: HttpContext): Observable<StrictHttpResponse<ArtistDto>> {
  const rb = new RequestBuilder(rootUrl, artistsControllerCreateArtist.PATH, 'post');
  if (params) {
    rb.body(params.body, 'multipart/form-data');
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

artistsControllerCreateArtist.PATH = '/api/artists';

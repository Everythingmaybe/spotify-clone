/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ArtistDto } from '../models/artist-dto';
import { ArtistListItemDto } from '../models/artist-list-item-dto';
import { artistsControllerCreateArtist } from '../fn/artists/artists-controller-create-artist';
import { ArtistsControllerCreateArtist$Params } from '../fn/artists/artists-controller-create-artist';
import { artistsControllerGetArtistById } from '../fn/artists/artists-controller-get-artist-by-id';
import { ArtistsControllerGetArtistById$Params } from '../fn/artists/artists-controller-get-artist-by-id';
import { artistsControllerGetArtistList } from '../fn/artists/artists-controller-get-artist-list';
import { ArtistsControllerGetArtistList$Params } from '../fn/artists/artists-controller-get-artist-list';

@Injectable({ providedIn: 'root' })
export class ArtistsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `artistsControllerGetArtistList()` */
  static readonly ArtistsControllerGetArtistListPath = '/api/artists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `artistsControllerGetArtistList()` instead.
   *
   * This method doesn't expect any request body.
   */
  artistsControllerGetArtistList$Response(params?: ArtistsControllerGetArtistList$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ArtistListItemDto>>> {
    return artistsControllerGetArtistList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `artistsControllerGetArtistList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  artistsControllerGetArtistList(params?: ArtistsControllerGetArtistList$Params, context?: HttpContext): Observable<Array<ArtistListItemDto>> {
    return this.artistsControllerGetArtistList$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ArtistListItemDto>>): Array<ArtistListItemDto> => r.body)
    );
  }

  /** Path part for operation `artistsControllerCreateArtist()` */
  static readonly ArtistsControllerCreateArtistPath = '/api/artists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `artistsControllerCreateArtist()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  artistsControllerCreateArtist$Response(params: ArtistsControllerCreateArtist$Params, context?: HttpContext): Observable<StrictHttpResponse<ArtistDto>> {
    return artistsControllerCreateArtist(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `artistsControllerCreateArtist$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  artistsControllerCreateArtist(params: ArtistsControllerCreateArtist$Params, context?: HttpContext): Observable<ArtistDto> {
    return this.artistsControllerCreateArtist$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArtistDto>): ArtistDto => r.body)
    );
  }

  /** Path part for operation `artistsControllerGetArtistById()` */
  static readonly ArtistsControllerGetArtistByIdPath = '/api/artists/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `artistsControllerGetArtistById()` instead.
   *
   * This method doesn't expect any request body.
   */
  artistsControllerGetArtistById$Response(params: ArtistsControllerGetArtistById$Params, context?: HttpContext): Observable<StrictHttpResponse<ArtistDto>> {
    return artistsControllerGetArtistById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `artistsControllerGetArtistById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  artistsControllerGetArtistById(params: ArtistsControllerGetArtistById$Params, context?: HttpContext): Observable<ArtistDto> {
    return this.artistsControllerGetArtistById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ArtistDto>): ArtistDto => r.body)
    );
  }

}

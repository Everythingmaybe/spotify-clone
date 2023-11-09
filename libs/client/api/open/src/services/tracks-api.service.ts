/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { TrackDto } from '../models/track-dto';
import { tracksControllerCreateTrack } from '../fn/tracks/tracks-controller-create-track';
import { TracksControllerCreateTrack$Params } from '../fn/tracks/tracks-controller-create-track';
import { tracksControllerGetTrack } from '../fn/tracks/tracks-controller-get-track';
import { TracksControllerGetTrack$Params } from '../fn/tracks/tracks-controller-get-track';

@Injectable({ providedIn: 'root' })
export class TracksApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tracksControllerGetTrack()` */
  static readonly TracksControllerGetTrackPath = '/api/tracks/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tracksControllerGetTrack()` instead.
   *
   * This method doesn't expect any request body.
   */
  tracksControllerGetTrack$Response(params: TracksControllerGetTrack$Params, context?: HttpContext): Observable<StrictHttpResponse<TrackDto>> {
    return tracksControllerGetTrack(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tracksControllerGetTrack$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tracksControllerGetTrack(params: TracksControllerGetTrack$Params, context?: HttpContext): Observable<TrackDto> {
    return this.tracksControllerGetTrack$Response(params, context).pipe(
      map((r: StrictHttpResponse<TrackDto>): TrackDto => r.body)
    );
  }

  /** Path part for operation `tracksControllerCreateTrack()` */
  static readonly TracksControllerCreateTrackPath = '/api/tracks';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tracksControllerCreateTrack()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tracksControllerCreateTrack$Response(params: TracksControllerCreateTrack$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return tracksControllerCreateTrack(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tracksControllerCreateTrack$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tracksControllerCreateTrack(params: TracksControllerCreateTrack$Params, context?: HttpContext): Observable<void> {
    return this.tracksControllerCreateTrack$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

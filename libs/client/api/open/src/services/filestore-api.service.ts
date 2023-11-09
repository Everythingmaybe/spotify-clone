/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { filestoreControllerGetAudio } from '../fn/filestore/filestore-controller-get-audio';
import { FilestoreControllerGetAudio$Params } from '../fn/filestore/filestore-controller-get-audio';
import { filestoreControllerGetImage } from '../fn/filestore/filestore-controller-get-image';
import { FilestoreControllerGetImage$Params } from '../fn/filestore/filestore-controller-get-image';
import { filestoreControllerUploadAudio } from '../fn/filestore/filestore-controller-upload-audio';
import { FilestoreControllerUploadAudio$Params } from '../fn/filestore/filestore-controller-upload-audio';
import { filestoreControllerUploadImage } from '../fn/filestore/filestore-controller-upload-image';
import { FilestoreControllerUploadImage$Params } from '../fn/filestore/filestore-controller-upload-image';

@Injectable({ providedIn: 'root' })
export class FilestoreApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `filestoreControllerGetImage()` */
  static readonly FilestoreControllerGetImagePath = '/api/filestore/image/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filestoreControllerGetImage()` instead.
   *
   * This method doesn't expect any request body.
   */
  filestoreControllerGetImage$Response(params: FilestoreControllerGetImage$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return filestoreControllerGetImage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filestoreControllerGetImage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filestoreControllerGetImage(params: FilestoreControllerGetImage$Params, context?: HttpContext): Observable<void> {
    return this.filestoreControllerGetImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `filestoreControllerUploadImage()` */
  static readonly FilestoreControllerUploadImagePath = '/api/filestore/image';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filestoreControllerUploadImage()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  filestoreControllerUploadImage$Response(params: FilestoreControllerUploadImage$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return filestoreControllerUploadImage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filestoreControllerUploadImage$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  filestoreControllerUploadImage(params: FilestoreControllerUploadImage$Params, context?: HttpContext): Observable<void> {
    return this.filestoreControllerUploadImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `filestoreControllerGetAudio()` */
  static readonly FilestoreControllerGetAudioPath = '/api/filestore/audio/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filestoreControllerGetAudio()` instead.
   *
   * This method doesn't expect any request body.
   */
  filestoreControllerGetAudio$Response(params: FilestoreControllerGetAudio$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return filestoreControllerGetAudio(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filestoreControllerGetAudio$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filestoreControllerGetAudio(params: FilestoreControllerGetAudio$Params, context?: HttpContext): Observable<void> {
    return this.filestoreControllerGetAudio$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `filestoreControllerUploadAudio()` */
  static readonly FilestoreControllerUploadAudioPath = '/api/filestore/audio';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filestoreControllerUploadAudio()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  filestoreControllerUploadAudio$Response(params: FilestoreControllerUploadAudio$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return filestoreControllerUploadAudio(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filestoreControllerUploadAudio$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  filestoreControllerUploadAudio(params: FilestoreControllerUploadAudio$Params, context?: HttpContext): Observable<void> {
    return this.filestoreControllerUploadAudio$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}

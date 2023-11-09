/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { UserDto } from '../models/user-dto';
import { usersControllerGetCurrentUser } from '../fn/users/users-controller-get-current-user';
import { UsersControllerGetCurrentUser$Params } from '../fn/users/users-controller-get-current-user';

@Injectable({ providedIn: 'root' })
export class UsersApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `usersControllerGetCurrentUser()` */
  static readonly UsersControllerGetCurrentUserPath = '/api/users/current';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `usersControllerGetCurrentUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerGetCurrentUser$Response(params?: UsersControllerGetCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return usersControllerGetCurrentUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `usersControllerGetCurrentUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  usersControllerGetCurrentUser(params?: UsersControllerGetCurrentUser$Params, context?: HttpContext): Observable<UserDto> {
    return this.usersControllerGetCurrentUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

}

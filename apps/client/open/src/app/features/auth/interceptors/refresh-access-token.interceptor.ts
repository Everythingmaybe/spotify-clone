import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, EMPTY, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from '../auth.service';
import { AuthApiService } from '@spotify-clone/client-api-open';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RefreshAccessTokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          error.status === HttpStatusCode.Unauthorized
        ) {
          if (req.url.endsWith(AuthApiService.AuthControllerRefreshPath)) {
            // this.router.navigateByUrl('login').then();
            return EMPTY;
          }

          return this.authService
            .refreshAccessToken()
            .pipe(switchMap(() => next.handle(req)));
        }
        return throwError(() => error);
      })
    );
  }
}

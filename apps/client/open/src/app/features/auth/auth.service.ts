import { inject, Injectable } from '@angular/core';
import {
  AuthApiService,
  SignInDto,
  SignUpDto,
} from '@spotify-clone/client-api-open';
import { catchError, switchMap, tap } from 'rxjs';
import { UserService } from '../user/user.service';

const ACCESS_TOKEN_KEY = 'accessToken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userService = inject(UserService);
  get accessToken(): string | null {
    return localStorage.getItem(ACCESS_TOKEN_KEY) || null; // Todo
  }
  constructor(private authApiService: AuthApiService) {}

  login(params: SignInDto) {
    return this.authApiService.authControllerSignIn({ body: params }).pipe(
      tap((token) => this.setAccessToken(token)),
      switchMap(() => this.userService.loadUser())
    );
  }

  signUp(params: SignUpDto) {
    return this.authApiService.authControllerSignUp({ body: params }).pipe(
      tap((token) => this.setAccessToken(token)),
      switchMap(() => this.userService.loadUser())
    );
  }

  refreshAccessToken() {
    return this.authApiService.authControllerRefresh({}).pipe(
      tap((token) => this.setAccessToken(token)),
      catchError(() => this.logout())
    );
  }

  logout() {
    return this.authApiService.authControllerLogout().pipe(
      tap(() => {
        this.setAccessToken();
        this.userService.setUser(null);
      })
    );
  }

  private setAccessToken(token?: string) {
    token
      ? localStorage.setItem(ACCESS_TOKEN_KEY, token)
      : localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}

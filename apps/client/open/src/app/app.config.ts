import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
  inject,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '@spotify-clone/client-api-open';
import { AuthModule } from './features/auth/auth.module';
import { UserService } from './features/user/user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ),
    importProvidersFrom([
      HttpClientModule,
      // ApiModule.forRoot({ rootUrl: '/' }),
      AuthModule,
    ]),
    {
      provide: APP_INITIALIZER,
      useFactory:
        (userService = inject(UserService)) =>
        () =>
          userService.loadUser(),
      multi: true,
    },
  ],
};

import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { UserDto, UsersApiService } from '@spotify-clone/client-api-open';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly userApiService = inject(UsersApiService);

  private readonly _user: BehaviorSubject<UserDto | null> =
    new BehaviorSubject<UserDto | null>(null);

  public readonly user$: Observable<UserDto | null> = this._user.asObservable();
  public readonly isLogined$: Observable<boolean> = this.user$.pipe(
    map((user) => Boolean(user))
  );

  loadUser(): Observable<UserDto> {
    return this.userApiService
      .usersControllerGetCurrentUser()
      .pipe(tap((user) => this.setUser(user)));
  }

  setUser(user: UserDto | null) {
    this._user.next(user);
  }
}

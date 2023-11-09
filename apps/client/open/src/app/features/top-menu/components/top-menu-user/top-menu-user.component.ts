import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ButtonComponent,
  IconButtonComponent,
  IconComponent,
} from '@spotify-clone/ui-kit';
import { AuthService } from '../../../auth/auth.service';
import { UserService } from '../../../user/user.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sp-top-menu-user',
  standalone: true,
  templateUrl: './top-menu-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IconButtonComponent,
    IconComponent,
    NgIf,
    AsyncPipe,
    RouterLink,
    ButtonComponent,
  ],
})
export class TopMenuUserComponent {
  private readonly authService = inject(AuthService);
  public readonly isLogined$ = inject(UserService).isLogined$;
  logout() {
    this.authService.logout().subscribe();
  }
}

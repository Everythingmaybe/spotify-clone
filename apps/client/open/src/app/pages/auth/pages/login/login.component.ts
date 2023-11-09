import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../features/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '@spotify-clone/ui-kit';

@Component({
  selector: 'sp-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, ButtonComponent, RouterLink],
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly form = this.fb.nonNullable.group({
    email: 'string@mail.com',
    password: '88888888',
  });

  submit() {
    this.authService
      .login(this.form.getRawValue())
      .subscribe(() => this.router.navigateByUrl('/'));
  }
}

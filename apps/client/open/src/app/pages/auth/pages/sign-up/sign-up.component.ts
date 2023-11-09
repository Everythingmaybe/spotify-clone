import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonComponent } from '@spotify-clone/ui-kit';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../features/auth/auth.service';

@Component({
  selector: 'sp-sign-up',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly form = this.fb.nonNullable.group({
    email: 'string@mail.com',
    password: '88888888',
    name: '',
  });

  submit() {
    this.authService
      .signUp(this.form.getRawValue())
      .subscribe(() => this.router.navigateByUrl('/'));
  }
}

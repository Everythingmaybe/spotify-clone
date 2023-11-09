import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PlayerModule } from '../player/player.module';
import { UserService } from '../user/user.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { ButtonComponent } from '@spotify-clone/ui-kit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sp-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PlayerModule, NgIf, AsyncPipe, ButtonComponent, RouterLink],
})
export class FooterComponent {
  public readonly isLogined$ = inject(UserService).isLogined$;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayerModule } from './features/player/player.module';

@Component({
  standalone: true,
  imports: [RouterOutlet, PlayerModule],
  selector: 'sp-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}

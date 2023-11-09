import { NgModule } from '@angular/core';
import { PlayerComponent } from './components/player/player.component';
import {
  IconButtonComponent,
  IconComponent,
  ImageComponent,
  LetDirective,
  ProgressBarComponent,
} from '@spotify-clone/ui-kit';
import { AsyncPipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { PlayerTrackInfoComponent } from './components/player/player-track-info/player-track-info.component';
import { RouterLink } from '@angular/router';
import { PlayerControlsComponent } from './components/player/player-controls/player-controls.component';
import { FormsModule } from '@angular/forms';
import { TimePipe } from '@spotify-clone/ui-kit';
import { PlayerDevicesComponent } from './components/player/player-devices/player-devices.component';
import { PlayerVolumeComponent } from './components/player/player-volume/player-volume.component';
import { PlayerPlayNowComponent } from './components/player/player-play-now/player-play-now.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerTrackInfoComponent,
    PlayerControlsComponent,
    PlayButtonComponent,
  ],
  exports: [PlayerComponent, PlayButtonComponent],
  imports: [
    ImageComponent,
    NgOptimizedImage,
    RouterLink,
    NgForOf,
    NgIf,
    FormsModule,
    AsyncPipe,
    TimePipe,
    IconButtonComponent,
    IconComponent,
    PlayerDevicesComponent,
    PlayerVolumeComponent,
    LetDirective,
    PlayerPlayNowComponent,
    ProgressBarComponent,
  ],
})
export class PlayerModule {}

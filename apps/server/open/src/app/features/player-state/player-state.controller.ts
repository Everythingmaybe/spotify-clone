import { Body, Controller, Post, Req, Sse } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { PlayerStateService } from './player-state.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../users/decorators/user.decorator';
import { UserDto } from '../users/dto/user.dto';
import { PlayerStateActionDto } from './dto/player-state-action.dto';
import { PlayerStateMessageDto } from './dto/player-state.dto';
import { Request } from 'express';

@ApiTags('Player state')
@ApiBearerAuth()
@Controller('player-state')
export class PlayerStateController {
  constructor(private readonly stateService: PlayerStateService) {}
  @Sse('')
  @ApiOkResponse({ type: PlayerStateMessageDto })
  state(
    @User() user: UserDto,
    @Req() request: Request
  ): Observable<PlayerStateMessageDto> {
    return this.stateService
      .getPlayerState(user.id, request.header('user-agent'))
      .pipe(map((state) => ({ data: state })));
  }

  @Post()
  action(@User() user: UserDto, @Body() action: PlayerStateActionDto) {
    return this.stateService.action(user.id, action);
  }
}

import { PlayerStateActionType } from '../player-state.service';
import { ApiProperty } from '@nestjs/swagger';

export class PlayerStateActionDto {
  @ApiProperty({
    enum: PlayerStateActionType,
    enumName: 'PlayerStateActionType',
  })
  type: PlayerStateActionType;
  @ApiProperty({
    required: false,
  })
  payload?: any;
}

import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UserDto {
  @ApiProperty()
  public id: string;
  @ApiProperty()
  public email: string;
  @ApiProperty()
  public name: string;
  @Exclude()
  public password: string;
  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}

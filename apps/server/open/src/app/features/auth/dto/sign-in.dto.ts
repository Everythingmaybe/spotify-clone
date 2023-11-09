import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDto {
  @ApiProperty({ default: 'string@mail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ default: '88888888' })
  @IsNotEmpty()
  password: string;
}

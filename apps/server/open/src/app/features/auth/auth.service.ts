import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignUpDto } from './dto/sign-up.dto';
import { SignInDto } from './dto/sign-in.dto';
import { TokenService } from '../../shared/modules/token/token.service';
import * as bcrypt from 'bcrypt';
import { UserDto } from '../users/dto/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokenService: TokenService
  ) {}
  async signUp(data: SignUpDto) {
    const hashPassword = await bcrypt.hash(data.password, 3);
    const user = await this.usersService.createUser({
      ...data,
      password: hashPassword,
    });
    return this.signIn(user);
  }

  async signIn(data: SignInDto) {
    const user = await this.usersService.getUserByEmail(data.email);
    if (!user) {
      throw new BadRequestException('Email not found');
    }

    const isEqualsPassword = await bcrypt.hash(data.password, user.password);
    if (!isEqualsPassword) {
      throw new BadRequestException('Wrong password');
    }

    const payload: Omit<UserDto, 'password'> = {
      id: user.id,
      email: user.email,
      name: user.name,
    };
    const refreshToken = await this.tokenService.generateRefreshToken(payload);
    await this.tokenService.saveRefreshToken(user.id, refreshToken);

    return {
      access_token: await this.tokenService.generateAccessToken(payload),
      refresh_token: refreshToken,
    };
  }

  async logout(refreshToken: string) {
    return this.tokenService.removeRefreshToken(refreshToken);
  }

  async refreshAccessToken(refreshToken: string) {
    const user: UserDto = new UserDto(
      await this.tokenService.verifyRefreshToken(refreshToken)
    );
    return this.tokenService.generateAccessToken({
      id: user.id,
      email: user.email,
      name: user.name,
    });
  }
}

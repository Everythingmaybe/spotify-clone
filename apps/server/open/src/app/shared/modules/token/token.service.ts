import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenRepository } from './token.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly tokenRepository: TokenRepository,
    private readonly config: ConfigService
  ) {}

  async saveRefreshToken(userId: string, refreshToken: string) {
    const existedToken = await this.tokenRepository.getRefreshToken(userId);
    return existedToken
      ? this.tokenRepository.updateRefreshToken(userId, refreshToken)
      : this.tokenRepository.createRefreshToken(userId, refreshToken);
  }

  removeRefreshToken(refreshToken: string) {
    return this.tokenRepository.removeRefreshToken(refreshToken);
  }

  generateAccessToken(payload: object) {
    return this.jwtService.signAsync(payload, {
      secret: this.config.get('JWT_ACCESS_SECRET'),
      expiresIn: '30m',
    });
  }

  generateRefreshToken(payload: object) {
    return this.jwtService.signAsync(payload, {
      secret: this.config.get('JWT_REFRESH_SECRET'),
      expiresIn: '30d',
    });
  }

  async verifyAccessToken(token: string) {
    try {
      return await this.jwtService.verifyAsync(token, {
        secret: this.config.get('JWT_ACCESS_SECRET'),
      });
    } catch {
      throw new UnauthorizedException();
    }
  }

  async verifyRefreshToken(token: string) {
    try {
      return await this.jwtService.verifyAsync(token, {
        secret: this.config.get('JWT_REFRESH_SECRET'),
      });
    } catch {
      throw new UnauthorizedException();
    }
  }
}

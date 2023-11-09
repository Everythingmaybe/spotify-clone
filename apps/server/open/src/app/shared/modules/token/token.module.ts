import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { DatabaseModule } from '../database/database.module';
import { JwtModule } from '@nestjs/jwt';
import { TokenRepository } from './token.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [JwtModule.register({}), DatabaseModule, ConfigModule],
  providers: [TokenService, TokenRepository],
  exports: [TokenService],
})
export class TokenModule {}

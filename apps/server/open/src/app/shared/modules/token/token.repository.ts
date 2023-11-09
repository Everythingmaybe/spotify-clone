import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TokenRepository {
  constructor(private readonly db: DatabaseService) {}
  getRefreshToken(userId: string) {
    return this.db.token.findUnique({
      where: { userId },
    });
  }
  createRefreshToken(userId: string, refreshToken: string) {
    return this.db.token.create({
      data: { refreshToken, userId },
    });
  }

  updateRefreshToken(userId: string, refreshToken: string) {
    return this.db.token.update({
      data: { refreshToken },
      where: { userId },
    });
  }

  removeRefreshToken(refreshToken: string) {
    return this.db.token.delete({
      where: { refreshToken },
    });
  }
}

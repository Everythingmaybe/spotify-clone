import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../shared/modules/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly db: DatabaseService) {}

  public createUser(data: CreateUserDto) {
    return this.db.user.create({ data });
  }

  getUserByEmail(email: string) {
    return this.db.user.findUnique({
      where: {
        email,
      },
    });
  }

  getUserById(id: string) {
    return this.db.user.findUnique({
      where: {
        id,
      },
    });
  }
}

import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  async createUser(data: CreateUserDto) {
    const existedUser = await this.usersRepository.getUserByEmail(data.email);
    if (existedUser)
      throw new ConflictException(`Пользователь ${data.email} зарегистрирован`);

    return this.usersRepository.createUser(data);
  }

  async getUserById(id: string) {
    const user = await this.usersRepository.getUserById(id);
    if (!user) throw new NotFoundException();
    return new UserDto(user);
  }
  async getUserByEmail(email: string) {
    const user = await this.usersRepository.getUserByEmail(email);
    if (!user) throw new NotFoundException();
    return new UserDto(user);
  }
}

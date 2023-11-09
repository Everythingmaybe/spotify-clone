import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from './decorators/user.decorator';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @UseInterceptors(ClassSerializerInterceptor)
  @Get('current')
  @ApiOkResponse({ type: UserDto })
  async getCurrentUser(@User() user: UserDto) {
    return this.usersService.getUserById(user.id);
  }
}

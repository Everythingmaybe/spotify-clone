import {
  Body,
  Controller,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { SignUpDto } from './dto/sign-up.dto';
import { AuthService } from './auth.service';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from './auth.guard';
import { Request } from 'express';

@ApiTags('Auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @ApiOkResponse({ type: String })
  @Post('sign-up')
  async signUp(
    @Body() data: SignUpDto,
    @Res({ passthrough: true }) response: Response
  ): Promise<string> {
    const tokens = await this.authService.signUp(data);
    this.setRefreshTokenToCookie(response, tokens.refresh_token);
    return tokens.access_token;
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: String })
  @Post('login')
  async signIn(
    @Body() data: SignInDto,
    @Res({ passthrough: true }) response: Response,
    @Req() req: Request
  ) {
    const tokens = await this.authService.signIn(data);
    this.setRefreshTokenToCookie(response, tokens.refresh_token);
    return tokens.access_token;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Post('logout')
  async logout(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response
  ) {
    const refreshToken = request['cookies'].refreshToken;
    if (!refreshToken) {
      throw new UnauthorizedException();
    }
    // await this.authService.logout(refreshToken);
    response['clearCookie']('refreshToken');
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: String })
  @Post('refresh')
  async refresh(@Req() request: Request) {
    const refreshToken = request['cookies'].refreshToken;
    if (!refreshToken) {
      throw new UnauthorizedException();
    }
    return this.authService.refreshAccessToken(refreshToken);
  }

  private setRefreshTokenToCookie(response: Response, token: string) {
    response['cookie']('refreshToken', token, {
      httpOnly: true,
      secure: false,
      expires: new Date(Date.now() + 30 * 24 * 60 * 1000),
    });
  }
}

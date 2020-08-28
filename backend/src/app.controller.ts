import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/create-user.dto';
@Controller()
export class AppController {
  constructor(private userService: UsersService) {}
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @Post('auth/register')
  async register(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }
}

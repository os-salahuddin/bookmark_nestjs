import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private UserService: UserService) {}

  @Get('/')
  @Render('layout')
  async index() {
    return {
      partialPage: 'user/index',
      users: await this.UserService.findAll(),
    };
  }
}

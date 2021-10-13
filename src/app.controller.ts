import { Controller, Get, Post } from '@nestjs/common';
import { User } from './account/account.dto/main.model';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.appService.getHello();
  }

  @Post()
  setHello(): string {
    return this.appService.setUser();
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Account } from './account.dto/account.model';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  accountsData(): Promise<Account[]> {
    return this.accountService.getAllAccount();
  }

  @Post()
  createAccount(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('age') age: number,
  ): Promise<string> {
    return this.accountService.createNewAccount(name, email, password, age);
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Account> {
    return this.accountService.getAccountById(id);
  }
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './account.dto/account.model';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>,
  ) {}
  accounts: Account[] = [];
  async createNewAccount(
    name: string,
    email: string,
    password: string,
    age: number,
  ): Promise<any> {
    const account = new this.accountModel({ name, email, password, age });
    const ac: any = await account.save();
    return {
      status: 'Success',
      statusCode: 200,
      body: ac,
    };
  }

  async getAllAccount(): Promise<Account[]> {
    const account: any = await this.accountModel.find({});
    return [...account];
  }

  async getAccountById(id: string): Promise<Account> {
    const account: Account = await (
      await this.accountModel.findOne({ _id: id })
    ).toObject();
    console.log(account);
    return { ...account };
  }
}

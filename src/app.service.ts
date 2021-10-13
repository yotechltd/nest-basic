import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { User, userDocument } from './account/account.dto/main.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<userDocument>,
  ) {
    // this.connection.on('disconnected', () => {
    //   console.log('DB disconnected');
    // });
    // this.connection.on('connected', () => {
    //   console.log('is connected');
    // });
  }
  async getHello(): Promise<User[]> {
    return await this.userModel.find().populate('account');
  }

  setUser(): string {
    const user = new this.userModel({
      name: 'Anik',
      account: '6160249d1b76a4d888b8ebb5',
    });
    user.save();
    return 'string';
  }
}

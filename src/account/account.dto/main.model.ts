/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Account } from './account.model';
export type userDocument = User & mongoose.Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Account' })
  account: Account;
}

export const UserSchema = SchemaFactory.createForClass(User);
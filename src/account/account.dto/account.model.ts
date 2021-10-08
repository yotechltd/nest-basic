/* eslint-disable prettier/prettier */
// import * as mongoose from 'mongoose';
// export const AccountSchema = new mongoose.Schema({
//   name: String,
//   password: String,
//   email: String,
//   age: Number,
// });

// export Account {
//   name: string;
//   password: string;
//   email: string;
//   age: number;
//   id: string;
// }


import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type AccountDocument = Account & Document;

@Schema()
export class Account{
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  age: number;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
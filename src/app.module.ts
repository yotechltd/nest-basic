import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AccountModule,
    MongooseModule.forRoot(
      'mongodb+srv://kumol:kumol254@cluster0.5hz61.mongodb.net/Nest-Test?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [MongooseModule],
})
export class AppModule {}

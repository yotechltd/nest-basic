import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { User, UserSchema } from './account/account.dto/main.model';

@Module({
  imports: [
    AccountModule,
    MongooseModule.forRoot(
      'mongodb+srv://kumol:kumol254@cluster0.5hz61.mongodb.net/Nest-Test?retryWrites=true&w=majority',
      {
        connectionFactory: (connection) => {
          connection.on('connected', (result) => {
            console.log('is connected', result);
          });
          connection.on('disconnected', () => {
            console.log('DB disconnected');
          });
          connection.on('error', (error) => {
            console.log('DB connection failed!', error);
          });
          return connection;
        },
      },
    ),
    DatabaseModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [MongooseModule],
})
export class AppModule {}

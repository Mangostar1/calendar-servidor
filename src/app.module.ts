import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ScheduleModule } from './schedule/schedule.module';
import 'dotenv/config'

@Module({
  imports: [AuthModule, UserModule, ScheduleModule, MongooseModule.forRoot('mongodb+srv://mangostar:'+ process.env.MONGO_PASS +'@calendar.s13gdnk.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

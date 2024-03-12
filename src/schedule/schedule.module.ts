import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { MongooseModule } from '@nestjs/mongoose';//<-- Mongo

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mangostar:dark123@calendar.s13gdnk.mongodb.net/')],
  controllers: [ScheduleController],
  providers: [ScheduleService]
})
export class ScheduleModule {}

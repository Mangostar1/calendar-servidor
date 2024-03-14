import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AddSchedule, scheduleSchema } from 'src/schemas/schedule.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: AddSchedule.name, schema: scheduleSchema}])],
  controllers: [ScheduleController],
  providers: [ScheduleService]
})
export class ScheduleModule {}

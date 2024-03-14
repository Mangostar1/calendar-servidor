import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Schedule, scheduleSchema } from 'src/schemas/schedule.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Schedule.name, schema: scheduleSchema}])],
  controllers: [ScheduleController],
  providers: [ScheduleService]
})
export class ScheduleModule {}

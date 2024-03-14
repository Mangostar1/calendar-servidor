import { Controller, Get, } from '@nestjs/common';
import { ScheduleService } from 'src/schedule/schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Get()
  getAllSchedule(){
    return this.scheduleService.findAll();
  }

}

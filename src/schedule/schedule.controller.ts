import { Controller, Get, Post, Body } from '@nestjs/common';
import { ScheduleService } from 'src/schedule/schedule.service';
import { CreateScheduleDto } from 'src/dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) {}

  @Get()
  getAllSchedule(){
    return this.scheduleService.findAll();
  }

  @Post()
  createSchedule(@Body() body: CreateScheduleDto){
    return this.scheduleService.create(body);
  }

}

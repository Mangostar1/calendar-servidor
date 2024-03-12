import { Controller, Get } from '@nestjs/common';

@Controller('schedule')
export class ScheduleController {

  @Get()
  getSchedule(){
    return 'Aca se retornara la info agendada por el usuario';
  }

}

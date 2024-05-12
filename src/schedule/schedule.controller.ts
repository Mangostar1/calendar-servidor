import { Controller, Get, Post, Body, Put, Delete, Logger, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ScheduleService } from 'src/schedule/schedule.service';
import { CreateScheduleDto } from 'src/dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  private readonly logger = new Logger(ScheduleController.name);

  constructor(private scheduleService: ScheduleService) {}

  @Get()
  async getAllSchedule(){
    try {
      const schedules = await this.scheduleService.findAll();
      this.logger.log('Se envian datos al calendario');
      return schedules;
    } catch (error) {
      this.logger.error(`Error al obtener todos los eventos: ${error.message}`);
      throw new HttpException('Error al obtener todos los eventos', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put(':id')
  async updateScheduleById(@Param('id') id: string, @Body() updateData: Partial<CreateScheduleDto>) {
    try {
      const updatedEvent = await this.scheduleService.updateEvent(id, updateData);
      this.logger.log(`Se actualiza evento: ${id}`);
      return updatedEvent;
    } catch (error) {
      this.logger.error(`Error al actualizar el evento: ${error.message}`);
      throw new HttpException('Error al actualizar el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post()
  async createSchedule(@Body() body: CreateScheduleDto) {
    try {
      const createdSchedule = await this.scheduleService.createEvent(body);
      this.logger.log(`Created schedule: ${JSON.stringify(createdSchedule)}`);
      return createdSchedule;
    } catch (error) {
      this.logger.error(`Error al crear el evento: ${error.message}`);
      throw new HttpException('Error al crear el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  async deleteScheduleById(@Param('id') id: string){
    try {
      const deleteEvent = await this.scheduleService.deleteEvent(id);
      this.logger.log(`Se elimina evento: ${id}`);
      return deleteEvent;
    } catch (error) {
      this.logger.error(`Error al eliminar el evento: ${error.message}`);
      throw new HttpException('Error al eliminar el evento', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}

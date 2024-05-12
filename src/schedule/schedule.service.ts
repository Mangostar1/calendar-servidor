import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Schedule, ScheduleDocument } from 'src/schemas/schedule.schema';
import { CreateScheduleDto } from 'src/dto/create-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(@InjectModel(Schedule.name) private scheduleModel: Model<ScheduleDocument>) {}

  async createEvent(createScheduleDto: CreateScheduleDto): Promise<Schedule> {//<-- Post
    const createSchedule = new this.scheduleModel(createScheduleDto);
    return createSchedule.save();
  }

  async findAll(): Promise<Schedule[]> {//<-- Get
    return this.scheduleModel.find().exec();
  }

  async updateEvent(id: string, updateData: Partial<CreateScheduleDto>): Promise<Schedule> {
    try {
      const eventToUpdate = await this.scheduleModel.findById(id);
      if (!eventToUpdate) {
        throw new Error('Evento no encontrado');
      }
      Object.assign(eventToUpdate, updateData);
      return eventToUpdate.save();
    } catch (error) {
      throw new Error(`Error al actualizar el evento: ${error.message}`);
    }
  }

  async deleteEvent(id: string): Promise<Schedule> {//<-- Delete
    return this.scheduleModel.findByIdAndDelete(id);
  }
}
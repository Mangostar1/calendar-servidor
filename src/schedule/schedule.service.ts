import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Schedule, ScheduleDocument } from 'src/schemas/schedule.schema';
import { CreateScheduleDto } from 'src/dto/create-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(@InjectModel(Schedule.name) private scheduleModel: Model<ScheduleDocument>) {}

  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {//<-- Post
    const createSchedule = new this.scheduleModel(createScheduleDto);
    return createSchedule.save();
  }

  async findAll(): Promise<Schedule[]> {//<-- Get
    return this.scheduleModel.find().exec();
  }
}
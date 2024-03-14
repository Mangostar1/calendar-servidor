import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddSchedule } from 'src/schemas/schedule.schema';
import { CreateScheduleDto } from 'src/dto/create-schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(@InjectModel(AddSchedule.name) private scheduleModel: Model<AddSchedule>) {}

  async create(createScheduleDto: CreateScheduleDto): Promise<AddSchedule> {
    const createSchedule = new this.scheduleModel(createScheduleDto);
    return createSchedule.save();
  }

  async findAll(): Promise<AddSchedule[]> {
    return this.scheduleModel.find().exec();
  }
}
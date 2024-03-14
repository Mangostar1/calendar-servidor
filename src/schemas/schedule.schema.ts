import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScheduleDocument = HydratedDocument<Schedule>;

@Schema()
export class Schedule {
  @Prop({ required: true, type: Date })
  dateStartEvent: Date;

  @Prop({ required: true, type: String })
  hourStart: string;

  @Prop({ required: true, type: Date })
  dateFinishEvent: Date;

  @Prop({ required: true, type: String })
  hourFinish: string;

  @Prop({ required: true, type: String })
  title: string;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: Object })
  statusInformation: {
    statusCode: number;
    status: string;
    colorStatus: string;
  };

  @Prop({ required: true, type: Object })
  typeInformation: {
    type: number;
    colorBackgroundType: string;
    colorType: string;
  };
}

export const scheduleSchema = SchemaFactory.createForClass(Schedule);
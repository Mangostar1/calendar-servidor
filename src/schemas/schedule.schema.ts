import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps : true
})
export class AddSchedule {
  @Prop({ required: true })
  dateStartEvent: Date;

  @Prop({ required: true })
  hourStart: string;

  @Prop({ required: true })
  dateFinishEvent: Date;

  @Prop({ required: true })
  hourFinish: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  statusInformation: {
    statusCode: number;
    status: string;
    colorStatus: string;
  };

  @Prop({ required: true })
  typeInformation: {
    type: number;
    colorBackgroundType: string;
    colorType: string;
  };
}

export const scheduleSchema = SchemaFactory.createForClass(AddSchedule);
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AddScheduleDocument = HydratedDocument<AddSchedule>;

@Schema()
class StatusInformation {
  @Prop({ required: true })
  statusCode: number;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  colorStatus: string;
}

@Schema()
class TypeInformation {
  @Prop({ required: true })
  type: number;

  @Prop({ required: true })
  colorBackgroundType: string;

  @Prop({ required: true })
  colorType: string;
}

@Schema()
export class AddSchedule {
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

  @Prop({ type: StatusInformation })
  statusInformation: StatusInformation;

  @Prop({ type: TypeInformation })
  typeInformation: TypeInformation;
}

export const scheduleSchema = SchemaFactory.createForClass(AddSchedule);
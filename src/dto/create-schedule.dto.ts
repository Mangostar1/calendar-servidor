import { IsNotEmpty, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsNotEmpty()
  @IsString()
  dateStartEvent: Date;

  @IsNotEmpty()
  @IsString()
  hourStart: string;

  @IsNotEmpty()
  @IsString()
  dateFinishEvent: Date;

  @IsNotEmpty()
  @IsString()
  hourFinish: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  statusInformation: {
    statusCode: number;
    status: string;
    colorStatus: string;
  };

  @IsNotEmpty()
  typeInformation: {
    type: number;
    colorBackgroundType: string;
    colorType: string;
  };
}
export interface CreateScheduleDto {
  dateStartEvent: Date;
  hourStart: string;
  dateFinishEvent: Date;
  hourFinish: string;
  title: string;
  description: string;
  statusInformation: {
    statusCode: number;
    status: string;
    colorStatus: string;
  };
  typeInformation: {
    type: number;
    colorBackgroundType: string;
    colorType: string;
  };
}
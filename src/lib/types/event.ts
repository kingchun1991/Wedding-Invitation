export interface IEvent {
  ID: string;
  From: string;
  To: string;
  Location: string;
  Description: string;
  新郎?: string;
  新娘?: string;
  姊妹?: string;
  兄弟?: string;
  Crew?: string;
  四大長老?: string;
  Material?: string;
  Remarks?: string;
}

export interface IConvertedEvent {
  name: string;
  description: string;
  startDate: string;
  startTime: string;
  endTime: string;
  location: string;
}

import { Dayjs } from "dayjs";

export type TBooking = {
  property: string;
  dates: [Dayjs, Dayjs];
};

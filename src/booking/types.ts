import { Dayjs } from "dayjs";

export type TBookingDates = [Dayjs, Dayjs];

export type TBooking = {
  id: string;
  property: string;
  dates: TBookingDates;
};

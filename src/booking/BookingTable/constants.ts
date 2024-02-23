import { TBookingDates } from "../types";

export const COLUMNS = [
  {
    title: 'Property name',
    key: 'property',
    dataIndex: 'property',
  },
  {
    title: 'Date',
    key: 'dates',
    dataIndex: 'dates',
    render: (dates: TBookingDates) => `${dates[0].format('MM/DD/YYYY')} - ${dates[1].format('MM/DD/YYYY')}`,
  },
];

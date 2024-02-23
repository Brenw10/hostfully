import { TBookingDates } from "../types";

export const COLUMNS = [
  {
    title: 'Property name',
    key: 'property',
    dataIndex: 'property',
  },
  {
    title: 'Start date',
    key: 'startDate',
    dataIndex: 'dates',
    render: (dates: TBookingDates) => dates[0].format('MM/DD/YYYY'),
  },
  {
    title: 'End date',
    key: 'endDate',
    dataIndex: 'dates',
    render: (dates: TBookingDates) => dates[1].format('MM/DD/YYYY'),
  },
];

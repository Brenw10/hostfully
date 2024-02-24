import { TBooking, TBookingDates } from "../types";

export const COLUMNS = [
  {
    title: 'Property name',
    key: 'property',
    dataIndex: 'property',
    sorter: (a: TBooking, b: TBooking) => a.property.localeCompare(b.property),
  },
  {
    title: 'Start Date',
    key: 'startDate',
    dataIndex: 'dates',
    render: (dates: TBookingDates) => dates[0].format('MM/DD/YYYY'),
    sorter: (a: TBooking, b: TBooking) => a.dates[0].diff(b.dates[0]),
  },
  {
    title: 'End Date',
    key: 'endDate',
    dataIndex: 'dates',
    render: (dates: TBookingDates) => dates[1].format('MM/DD/YYYY'),
    sorter: (a: TBooking, b: TBooking) => a.dates[1].diff(b.dates[1]),
  },
];

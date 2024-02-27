import dayjs from "dayjs";
import { TBooking } from "../types";
import BookingsReducer from "./reducer";

const BOOKING_1 = {
  id: '1',
  property: 'hotel 1',
  dates: [dayjs(), dayjs()],
} as TBooking;

const BOOKING_2 = {
  id: '2',
  property: 'hotel 2',
  dates: [dayjs(), dayjs()],
} as TBooking;

describe('testing bookings provider reducer', () => {
  it('should add a new booking', () => {
    const response = BookingsReducer(
      [BOOKING_1],
      { type: 'ADD', payload: BOOKING_2 },
    );

    expect(response).toStrictEqual([BOOKING_1, BOOKING_2]);
  });

  it('should remove a booking', () => {
    const response = BookingsReducer(
      [BOOKING_1, BOOKING_2],
      { type: 'REMOVE', payload: BOOKING_2 },
    );

    expect(response).toStrictEqual([BOOKING_1]);
  });

  it('should update a booking', () => {
    const newBooking2 = { ...BOOKING_2, property: 'test' };

    const response = BookingsReducer(
      [BOOKING_1, BOOKING_2],
      { type: 'UPDATE', payload: newBooking2 },
    );

    expect(response).toStrictEqual([BOOKING_1, newBooking2]);
  });
});

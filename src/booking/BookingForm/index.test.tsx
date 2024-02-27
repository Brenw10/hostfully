import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import BookingForm from '.';
import dayjs from 'dayjs';
import * as context from '../BookingsProvider/context';
import { TBooking, TBookingDates } from '../types';

const PROPS_MOCK = {
  onCancel: jest.fn(),
  onSubmitted: jest.fn(),
};

const ON_CANCEL_SPY = jest.spyOn(PROPS_MOCK, 'onCancel');
const ON_SUBMITTED_SPY = jest.spyOn(PROPS_MOCK, 'onSubmitted');

const BOOKING_DATA = {
  property: 'hotel 1',
  dates: [
    dayjs().add(3, 'day').startOf('day'),
    dayjs().add(6, 'day').startOf('day'),
  ],
} as TBooking;

const selectDateRange = (dates: TBookingDates) => {
  fireEvent.click(screen.getByPlaceholderText('Start date'));
  fireEvent.click(screen.getAllByTitle(dates[0].format('YYYY-MM-DD'))[0]);
  fireEvent.click(screen.getAllByTitle(dates[1].format('YYYY-MM-DD'))[0]);
};

jest.mock('../BookingsProvider/context', () => ({
  __esModule: true,
  useBookings: () => ({
    bookings: [],
    dispatch: jest.fn(),
  }),
}));

describe('testing default form', () => {
  it('should render input fields', () => {
    render(<BookingForm {...PROPS_MOCK} />);

    expect(screen.getByText('Property Name')).toBeInTheDocument();
    expect(screen.getByText('Booking Dates')).toBeInTheDocument();
  });

  it('should render action buttons', () => {
    render(<BookingForm {...PROPS_MOCK} />);

    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should show error when fields are empty', async () => {
    render(<BookingForm {...PROPS_MOCK} />);

    const submitButton = screen.getByText('Submit');

    submitButton.click();

    await waitFor(() =>
      expect(screen.getAllByText('This field is required').length).toBe(2)
    );
  });

  it('should call cancel callback', () => {
    render(<BookingForm {...PROPS_MOCK} />);

    fireEvent.click(screen.getByText('Cancel'));

    expect(ON_CANCEL_SPY).toHaveBeenCalled();
  });

  it('should progress when fields have data', async () => {
    render(<BookingForm {...PROPS_MOCK} />);

    const propertyInput = screen.getByPlaceholderText('Property name');

    fireEvent.change(propertyInput, { target: { value: BOOKING_DATA.property } });

    selectDateRange(BOOKING_DATA.dates);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(ON_SUBMITTED_SPY).toHaveBeenCalledWith(BOOKING_DATA));
  });
});

describe('testing create booking form', () => {
  it('should render create booking title', () => {
    render(<BookingForm {...PROPS_MOCK} />);

    expect(screen.getByText('Create a booking')).toBeInTheDocument();
  });

  it('should not allow dates previously added', async () => {
    jest.spyOn(context, 'useBookings')
      .mockImplementation(() => ({ bookings: [BOOKING_DATA], dispatch: jest.fn() }));

    render(<BookingForm {...PROPS_MOCK} />);

    fireEvent.click(screen.getByPlaceholderText('Start date'));

    selectDateRange(BOOKING_DATA.dates);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() =>
      expect(screen.getAllByText('This field is required').length).toBe(2)
    );
  });
});

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

const EXISTING_BOOKING_DATA = {
  id: '2',
  property: 'hotel 2',
  dates: [
    dayjs().add(7, 'day').startOf('day'),
    dayjs().add(10, 'day').startOf('day'),
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
    jest.spyOn(context, 'useBookings')
      .mockImplementation(() => ({ bookings: [EXISTING_BOOKING_DATA], dispatch: jest.fn() }));

    render(<BookingForm {...PROPS_MOCK} />);

    const propertyInput = screen.getByPlaceholderText('Property name');

    fireEvent.change(propertyInput, { target: { value: BOOKING_DATA.property } });

    selectDateRange(BOOKING_DATA.dates);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(ON_SUBMITTED_SPY).toHaveBeenCalledWith(BOOKING_DATA));
  });

  it('should not allow select previous date', async () => {
    render(<BookingForm {...PROPS_MOCK} />);

    selectDateRange([dayjs().subtract(5, 'day'), dayjs()]);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() =>
      expect(screen.getAllByText('This field is required').length).toBe(2)
    );
  });
});

describe('testing create booking form', () => {
  it('should render create booking title', () => {
    render(<BookingForm {...PROPS_MOCK} />);

    expect(screen.getByText('Create a booking')).toBeInTheDocument();
  });

  it('should not allow dates previously added', async () => {
    jest.spyOn(context, 'useBookings')
      .mockImplementation(() => ({ bookings: [EXISTING_BOOKING_DATA], dispatch: jest.fn() }));

    render(<BookingForm {...PROPS_MOCK} />);

    fireEvent.click(screen.getByPlaceholderText('Start date'));

    selectDateRange(EXISTING_BOOKING_DATA.dates);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() =>
      expect(screen.getAllByText('This field is required').length).toBe(2)
    );
  });
});

describe('testing edit booking form', () => {
  beforeEach(() => {
    jest.spyOn(context, 'useBookings')
      .mockImplementation(() => ({ bookings: [EXISTING_BOOKING_DATA], dispatch: jest.fn() }));
  });

  it('should render booking being edited', () => {
    render(<BookingForm {...PROPS_MOCK} booking={EXISTING_BOOKING_DATA} />);

    expect(screen.getByPlaceholderText('Property name'))
      .toHaveValue(EXISTING_BOOKING_DATA.property);
    expect(screen.getByPlaceholderText('Start date'))
      .toHaveValue(EXISTING_BOOKING_DATA.dates[0].format('YYYY-MM-DD'));
    expect(screen.getByPlaceholderText('End date'))
      .toHaveValue(EXISTING_BOOKING_DATA.dates[1].format('YYYY-MM-DD'));
  });

  it('should allow select dates from current booking', async () => {
    render(<BookingForm {...PROPS_MOCK} booking={EXISTING_BOOKING_DATA} />);

    const newDates = [
      EXISTING_BOOKING_DATA.dates[0].add(1, 'day'),
      EXISTING_BOOKING_DATA.dates[1].subtract(1, 'day'),
    ] as TBookingDates;

    selectDateRange(newDates);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() =>
      expect(ON_SUBMITTED_SPY).toHaveBeenCalledWith({ ...EXISTING_BOOKING_DATA, dates: newDates })
    );
  });

  it('should allow change property', async () => {
    render(<BookingForm {...PROPS_MOCK} booking={EXISTING_BOOKING_DATA} />);

    const newProperty = 'test title';

    const propertyInput = screen.getByPlaceholderText('Property name');

    fireEvent.change(propertyInput, { target: { value: newProperty } });

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() =>
      expect(ON_SUBMITTED_SPY).toHaveBeenCalledWith({ ...EXISTING_BOOKING_DATA, property: newProperty })
    );
  });
});
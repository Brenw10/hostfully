import { screen, render, waitFor, fireEvent } from '@testing-library/react';
import BookingForm from '.';
import dayjs from 'dayjs';

const propsMock = {
  onCancel: jest.fn(),
  onSubmitted: jest.fn(),
};

const onSubmittedSpy = jest.spyOn(propsMock, 'onSubmitted');

jest.mock('../BookingsProvider/context', () => ({
  __esModule: true,
  useBookings: () => ({
    bookings: [],
    dispatch: jest.fn(),
  }),
}));

describe('testing create booking form', () => {
  beforeEach(() => {
    render(
      <BookingForm {...propsMock} />
    );
  });

  it('should render create booking title', () => {
    expect(screen.getByText('Create a booking')).toBeInTheDocument();
  });

  it('should render input fields', () => {
    expect(screen.getByText('Property Name')).toBeInTheDocument();
    expect(screen.getByText('Booking Dates')).toBeInTheDocument();
  });

  it('should render actiom buttons', () => {
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('should show error when fields are empty', async () => {
    const submitButton = screen.getByText('Submit');

    submitButton.click();

    await waitFor(() =>
      expect(screen.getAllByText('This field is required').length).toBe(2)
    );
  });

  it('should progress when fields have data', async () => {
    const bookingData = {
      property: 'hotel 1',
      dates: [
        dayjs().add(3, 'day').startOf('day'),
        dayjs().add(6, 'day').startOf('day'),
      ],
    };

    const propertyInput = screen.getByPlaceholderText('Property name');

    fireEvent.change(propertyInput, { target: { value: bookingData.property } });

    fireEvent.click(screen.getByPlaceholderText('Start date'));
    fireEvent.click(screen.getAllByTitle(bookingData.dates[0].format('YYYY-MM-DD'))[0]);
    fireEvent.click(screen.getAllByTitle(bookingData.dates[1].format('YYYY-MM-DD'))[0]);

    fireEvent.click(screen.getByText('Submit'));

    await waitFor(() => expect(onSubmittedSpy).toHaveBeenCalledWith(bookingData));
  });
});

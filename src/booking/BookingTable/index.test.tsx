import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BookingTable from ".";
import '../../mocks/matchMedia.mock';
import dayjs from "dayjs";
import { TBooking } from "../types";

const BOOKING = {
  id: '1',
  property: 'hotel 1',
  dates: [
    dayjs().add(3, 'day').startOf('day'),
    dayjs().add(6, 'day').startOf('day'),
  ],
} as TBooking;

const USE_BOOKINGS_MOCK = { bookings: [BOOKING], dispatch: jest.fn() };

jest.mock('react-router-dom', () => ({
  __esModule: true,
  useNavigate: jest.fn(),
}));

jest.mock('../BookingsProvider/context', () => ({
  __esModule: true,
  useBookings: () => USE_BOOKINGS_MOCK,
}));

describe('testing booking table', () => {
  it('should render column items', () => {
    render(<BookingTable />);

    expect(screen.getByText('Property name')).toBeInTheDocument();
    expect(screen.getByText('Start Date')).toBeInTheDocument();
    expect(screen.getByText('End Date')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  it('should render bookings correctly', () => {
    render(<BookingTable />);

    expect(screen.getByText(BOOKING.property)).toBeInTheDocument();
    expect(screen.getByText(BOOKING.dates[0].format('YYYY-MM-DD'))).toBeInTheDocument();
    expect(screen.getByText(BOOKING.dates[1].format('YYYY-MM-DD'))).toBeInTheDocument();
  });

  it('should render actions buttons', () => {
    render(<BookingTable />);

    expect(screen.getByLabelText('Edit')).toBeInTheDocument();
    expect(screen.getByLabelText('Delete')).toBeInTheDocument();
  });

  it('should show delete modal when clicking on delete icon', async () => {
    render(<BookingTable />);

    fireEvent.click(screen.getByLabelText('Delete'));

    await waitFor(() => expect(screen.getByText('Confirm your action')).toBeVisible());
    expect(
      screen.getByText(`Are you sure you want to delete your booking on`, { exact: false }).textContent
    ).toEqual(`Are you sure you want to delete your booking on ${BOOKING.property}?`);
  });

  it('should cancel delete modal', async () => {
    render(<BookingTable />);

    fireEvent.click(screen.getByLabelText('Delete'));
    await waitFor(() => expect(screen.getByText('Confirm your action')).toBeVisible());

    fireEvent.click(screen.getByText('Cancel'));
    await waitFor(() => expect(screen.getByText('Confirm your action')).not.toBeVisible());
  });

  it('should submit delete modal', () => {
    const dispatchSpy = jest.spyOn(USE_BOOKINGS_MOCK, 'dispatch');

    render(<BookingTable />);

    fireEvent.click(screen.getByLabelText('Delete'));

    fireEvent.click(screen.getByText('OK'));

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'REMOVE',
      payload: expect.objectContaining(BOOKING),
    });
  });
});

import { render, screen } from "@testing-library/react";
import EditBookingPage from ".";
import dayjs from "dayjs";
import { TBooking } from "../../booking/types";
import { BrowserRouter } from "react-router-dom";

const BOOKING = {
  id: '1',
  property: 'hotel 1',
  dates: [
    dayjs().add(3, 'day').startOf('day'),
    dayjs().add(6, 'day').startOf('day'),
  ],
} as TBooking;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  __esModule: true,
  useParams: () => ({ id: BOOKING.id }),
}));

jest.mock('../../booking/BookingsProvider/context', () => ({
  __esModule: true,
  useBookings: () => ({ bookings: [BOOKING], dispatch: jest.fn() }),
}));

describe('testing create booking page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <EditBookingPage />
      </BrowserRouter>
    );
  });

  it('should render header', () => {
    expect(screen.getByText('Hostfully')).toBeInTheDocument();
  });

  it('it should render editing booking form', () => {
    expect(screen.getByText(`Editing booking: ${BOOKING.property}`)).toBeInTheDocument();
  });
});

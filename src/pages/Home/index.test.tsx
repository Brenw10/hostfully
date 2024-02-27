import { render, screen } from "@testing-library/react";
import HomePage from ".";
import { BrowserRouter } from "react-router-dom";
import '../../mocks/matchMedia.mock';

jest.mock('../../booking/BookingsProvider/context', () => ({
  __esModule: true,
  useBookings: () => ({
    bookings: [],
    dispatch: jest.fn(),
  }),
}));

describe('testing home page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  it('should render header', () => {
    expect(screen.getByText('Hostfully')).toBeInTheDocument();
  });

  it('should render create a booking', () => {
    expect(screen.getByText('Create a booking')).toBeInTheDocument();
  });

  it('should render booking table', () => {
    expect(screen.getByText('Property name')).toBeInTheDocument();
    expect(screen.getByText('Start Date')).toBeInTheDocument();
    expect(screen.getByText('End Date')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });
});

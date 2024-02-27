import { render, screen } from "@testing-library/react";
import CreateBookingPage from ".";
import { BrowserRouter } from "react-router-dom";

describe('testing create booking page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CreateBookingPage />
      </BrowserRouter>
    );
  });

  it('should render header', () => {
    expect(screen.getByText('Hostfully')).toBeInTheDocument();
  });

  it('it should render booking form', () => {
    expect(screen.getByText('Create a booking')).toBeInTheDocument();
  });
});

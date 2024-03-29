import { render, screen } from "@testing-library/react";
import NotFoundPage from ".";
import { BrowserRouter } from "react-router-dom";

describe('testing not found page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );
  });

  it('should render header', () => {
    expect(screen.getByText('Hostfully')).toBeInTheDocument();
  });

  it('should render error message', () => {
    expect(screen.getByText('Sorry, this page does not exist.')).toBeInTheDocument();
  })
});

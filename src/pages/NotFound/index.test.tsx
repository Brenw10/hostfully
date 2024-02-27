import { render, screen } from "@testing-library/react";
import NotFoundPage from ".";
import { BrowserRouter } from "react-router-dom";

describe('testing not found page', () => {
  it('should render error message', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Sorry, this page does not exist.')).toBeInTheDocument();
  })
});

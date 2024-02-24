import { render } from '@testing-library/react';
import BookingForm from '.';

describe('testing booking form', () => {
  beforeEach(() => {
    render(
      <BookingForm onCancel={() => null} onSubmitted={() => null} />
    );
  });

  it('should contain input fields', () => {
    
  });
});

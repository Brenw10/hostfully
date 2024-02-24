import { render } from '@testing-library/react';
import InputLabel from '.';

describe('testing input label is displaying props correctly', () => {
  it('should show required props label and children', () => {
    const { getByText } = render(
      <InputLabel label='Test title'>Test children</InputLabel>
    );

    getByText('Test title');
    getByText('Test children');
  });

  it('should show error message when sent', () => {
    const { getByText } = render(
      <InputLabel label='Test title' error='Test error'>Test children</InputLabel>
    );

    getByText('Test error');
  });
});

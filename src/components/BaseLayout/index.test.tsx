import { render } from '@testing-library/react';
import BaseLayout from '.';
import { BrowserRouter } from 'react-router-dom';

describe('testing base layout is displaying correctly', () => {
  it('should render header and content', () => {
    const { getByText } = render(
      <BrowserRouter>
        <BaseLayout>
          Children content
        </BaseLayout>
      </BrowserRouter>
    );

    expect(getByText('Hostfully')).toBeInTheDocument();
    expect(getByText('Children content')).toBeInTheDocument();
  });
});

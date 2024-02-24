import { render } from '@testing-library/react';
import BaseLayout from '.';
import { BrowserRouter } from 'react-router-dom';

describe('testing base layout is displaying correctly', () => {
  it('should header and content', () => {
    const { getByText } = render(
      <BrowserRouter>
        <BaseLayout>
          Children content
        </BaseLayout>
      </BrowserRouter>
    );

    getByText('Hostfully');
    getByText('Children content');
  });
});

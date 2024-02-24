import { render } from '@testing-library/react';
import Header from '.';
import { BrowserRouter } from 'react-router-dom';

describe('testing header is displaying correctly', () => {
  it('should contain logo link', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logoLink = getByText('Hostfully');

    expect(logoLink.getAttribute('href')).toBe('/');
  });
});

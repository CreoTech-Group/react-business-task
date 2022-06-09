import { screen } from '@testing-library/react';
import { testRender } from 'test';
import { Header } from 'components';

test('checks that the header contains the app name', () => {
  testRender(<Header />);
  const element = screen.getByText(/LOGO/i);
  expect(element).toBeInTheDocument();
});

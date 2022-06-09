import { screen } from '@testing-library/react';
import { testRender } from 'test';
import { NotFound } from 'components';

test('checks that the business not found message is rendered', () => {
  testRender(<NotFound />);
  const element = screen.getByText(/We couldn't find the business you are looking for./i);
  expect(element).toBeInTheDocument();
});

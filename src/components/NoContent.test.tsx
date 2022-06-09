import { screen } from '@testing-library/react';
import { testRender } from 'test';
import { NoContent } from 'components';

test('checks that the empty list message is shown', () => {
  const message = 'no content';
  testRender(<NoContent message={message} />);
  const element = screen.getByText(message);
  expect(element).toBeInTheDocument();
});

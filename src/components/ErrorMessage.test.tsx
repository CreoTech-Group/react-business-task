import { screen } from '@testing-library/react';
import { testRender } from 'test';
import { ErrorMessage } from 'components';

test('checks that ErrorMessage renders the supplied string', () => {
    const testMessage = 'test error message';
    testRender(<ErrorMessage error={{ genericMessage: testMessage, errorObject: undefined }} />);
    expect(screen.getByText(testMessage)).toBeInTheDocument();
});

import { screen } from '@testing-library/react';
import { testRender } from 'test';
import { BusinessList } from 'components';
import { business } from 'test/model';
import { IBusiness } from 'models';

test('checks that BusinessList renders business list and links', () => {
    const businesses: IBusiness[] = [business];

    testRender(<BusinessList businesses={businesses} />);
    expect(screen.getByText('NAME')).toBeInTheDocument();
    expect(screen.getByText('DESCRIPTION')).toBeInTheDocument();

    expect(screen.getByTestId(`business-list-test-${business.id}`)).toHaveAttribute('href', `/business/${business.id}`)
});

test('checks that BusinessList renders empty content', () => {
    testRender(<BusinessList businesses={[]} />);
    expect(screen.getByText('There are no businesses defined yet.')).toBeInTheDocument();
});

import { screen } from '@testing-library/react';
import { testRender } from 'test';
import { BusinessListItem } from 'components';
import { business } from 'test/model';

test('checks that BusinessList renders business list and links', () => {
    testRender(<BusinessListItem business={business} />);
    expect(screen.getByText(business.name)).toBeInTheDocument();
    expect(screen.getByText(business.description)).toBeInTheDocument();
});

import { screen } from '@testing-library/react';
import { testRender } from 'test';
import { Business } from 'components';
import { IBusiness, IAddress } from 'models';

test('checks that Business renders the proper information', () => {
    const address: IAddress = {
        city: 'Austin',
        street: 'Some Street',
        number: '5678',
        zip: '91011',
        country: 'TX',
    };
    const business: IBusiness = {
        id: '1',
        name: 'My Bizz',
        description: 'A very lucrative business.',
        phone: '+1 123456',
        image: 'https://https://images.unsplash.com/photo-1527015175922-36a306cf0e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=1000',
        email: 'igowanlock0@networkadvertising.org',
        address,
    };

    const nearBy: IBusiness[] = [];

    testRender(<Business business={business} nearBy={nearBy} />);

    expect(screen.getByText(business.phone)).toBeInTheDocument();
    expect(screen.getByText(business.email)).toBeInTheDocument();
    
    expect(screen.getByText(`${address.number} ${address.street}`)).toBeInTheDocument();
    expect(screen.getByText(`${address.city}, ${address.country} ${address.zip}`)).toBeInTheDocument();
});

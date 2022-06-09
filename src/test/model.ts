import { IAddress, IBusiness } from "models";

export const address: IAddress = {
    city: 'Austin',
    street: 'Some Street',
    number: '5678',
    zip: '91011',
    country: 'TX',
};
export const business: IBusiness = {
    id: '1',
    name: 'My Bizz',
    description: 'A very lucrative business.',
    phone: '+1 123456',
    image: 'https://https://images.unsplash.com/photo-1527015175922-36a306cf0e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=1000',
    email: 'igowanlock0@networkadvertising.org',
    address,
};
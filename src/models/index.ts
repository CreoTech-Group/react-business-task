export interface IBusiness {
    id: string;
    name: string;
    description: string;
    phone: string;
    image: string;
    email: string;
    address: IAddress;
}

export interface IAddress {
    number: string;
    street: string;
    zip: string;
    city: string;
    country: string;
}

export interface IInfo {
    title: string;
    rows: string[];
}
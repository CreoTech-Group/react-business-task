import { IBusiness, IInfo, IAddress } from "models";
import { Info, NearbyBusinesses } from "components";
import FancyImage from "components/FancyImage";
import 'components/Business.scss';
import { useIntl } from "react-intl";

interface IProps {
    business: IBusiness;
    nearBy: IBusiness[];
}

function getAddressInfo(title: string, address: IAddress): IInfo {
    return {
        title,
        rows: [
            `${address.number} ${address.street}`,
            `${address.city}, ${address.country} ${address.zip}`,
        ],
    };
}

function getContactInfo(title: string, contact: IBusiness): IInfo {
    return {
        title,
        rows: [
            contact.phone,
            contact.email,
        ],
    };
}

const Business: React.FC<IProps> = ({ business, nearBy }) => {
    const intl = useIntl();

    const addressInfo = getAddressInfo(intl.formatMessage({ id: 'business.address' }), business.address);
    const contactInfo = getContactInfo(intl.formatMessage({ id: 'business.contact' }), business);
    return (
        <div>
            <FancyImage url={business.image} />
            <div className='business-view-info'>
                <div className='business-view-info-container'>
                    <Info data={addressInfo} />
                    <Info data={contactInfo} />
                </div>
                <NearbyBusinesses businesses={nearBy} />
            </div>
        </div>
    );
};

export default Business;
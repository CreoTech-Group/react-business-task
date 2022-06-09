import * as React from 'react';
import 'components/NearbyBusinesses.scss';
import { IBusiness } from 'models';
import { FormattedMessage } from 'react-intl';

interface IProps {
    businesses: IBusiness[];
}

const NearbyBusinesses: React.FC<IProps> = ({ businesses }) => {
    const renderBusiness = React.useCallback((item: IBusiness, index: number) => {
        const address = item.address;
        return (
            <div key={index} className='nearby-business-item'>
                <div className='nearby-business-name'>
                    {item.name}
                </div>
                <div className='nearby-business-address'>
                    {`${address.number} ${address.street}, ${address.city} ${address.zip}`}
                </div>
            </div>
        );
    }, []);

    if (businesses.length === 0) {
        return null;
    }

	return (
        <div className='nearby-businesses'>
            <div className='nearby-businesses-title'><FormattedMessage id='business.nearby-places' /></div>
            {businesses.map(renderBusiness)}
        </div>
    );
};

export default NearbyBusinesses;

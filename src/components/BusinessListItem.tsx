import React from 'react';
import { IBusiness } from "models";
import 'components/BusinessListItem.scss';

interface IProps {
    business: IBusiness;
}

const BusinessListItem: React.FC<IProps> = ({ business }) => {
    return (
        <div className='business-list-item'>
            <div className='business-list-item-name'>{`${business.name}`}</div>
            <div className='business-list-item-description'>{business.description}</div>
        </div>
    );
};

export default BusinessListItem;
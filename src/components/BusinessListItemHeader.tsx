import React from 'react';
import 'components/BusinessListItemHeader.scss';

const BusinessListItemHeader: React.FC = () => {
    return (
        <div className='business-list-item-header'>
            <div className='business-list-item-header-name'>NAME</div>
            <div className='business-list-item-header-description'>DESCRIPTION</div>
        </div>
    );
};

export default BusinessListItemHeader;
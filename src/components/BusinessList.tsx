import React from 'react';

import { IBusiness } from "models";
import { BusinessListItemHeader, BusinessListItem, NoContent } from 'components';
import { Link } from 'react-router-dom';
import 'components/BusinessList.scss';
import { useIntl } from 'react-intl';

interface IProps {
    businesses: IBusiness[];
}

const BusinessList: React.FC<IProps> = ({ businesses }) => {
    const intl = useIntl();

    const renderListItem = React.useCallback((item: IBusiness, index: number) => {
        return (
            <div key={item.id}>
                {index === 0 && <BusinessListItemHeader />}
                <Link data-testid={`business-list-test-${item.id}`} className='business-item-link' to={`/business/${item.id}`}>
                    <BusinessListItem business={item} />
                </Link>
            </div>
        );
    }, []);

    return (
        <div data-testid='business-list' className='business-list'>
            {businesses.length === 0 && <NoContent message={intl.formatMessage({ id: 'list.empty' })} />}
            {businesses.length > 0 && businesses.map(renderListItem)}
        </div>
    );
};

export default BusinessList;

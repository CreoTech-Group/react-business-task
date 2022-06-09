import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Business, ErrorMessage, LoadingIndicator, NotFound } from 'components';
import { withRouter } from 'components/hoc';
import { IBusiness } from 'models';
import { BusinessActions, IBusinessActions } from 'store/slices/business';
import { IApplicationState } from 'store/contracts';
import { useNetworkRequest } from 'hooks';

function nearByFilter(business1: IBusiness) {
    return (business2: IBusiness) => 
        business1.address.city === business2.address.city &&
        business1.id !== business2.id;
}

interface IStateProps {
    businessId: string;
    businesses: IBusiness[];
};

interface IParams {
    id: string;
}

type PropsType = IStateProps & IBusinessActions;

export const Component: React.FC<PropsType> = ({ businesses, businessId, fetchBusinesses, setBusinesses }) => {
    const fetchBusinessesRequest = useNetworkRequest<IBusiness[]>();

    React.useEffect(() => {
        if (businesses.length > 0) {
            return;
        }

        let mounted = true;
        (async () => {
            const result = await fetchBusinessesRequest.fetch(() => fetchBusinesses());
            if (mounted) {
                setBusinesses(result || []);
            }
        })();

        return () => { mounted = false; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (fetchBusinessesRequest.isLoading) {
        return <LoadingIndicator />
    }

    if (fetchBusinessesRequest.error) {
        return <ErrorMessage error={fetchBusinessesRequest.error} />
    }

    const business: IBusiness | undefined = businesses.find(i => i.id === businessId);
    if (!business) {
        return <NotFound />
    }

    return <Business business={business} nearBy={businesses.filter(nearByFilter(business))} />;
};

const mapStateToProps = (state: IApplicationState, params: IParams): IStateProps => {
    return {
        businesses: state.business.list,
        businessId: params.id,
    };
}

export default compose(withRouter, connect(mapStateToProps, BusinessActions))(Component);
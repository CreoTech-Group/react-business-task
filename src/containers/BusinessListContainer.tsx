import React from 'react';

import { BusinessList, LoadingIndicator, ErrorMessage } from 'components';
import { IBusiness } from 'models';
import { connect } from 'react-redux';
import { IApplicationState } from 'store/contracts';
import { BusinessActions, IBusinessActions } from 'store/slices/business';
import { useNetworkRequest } from 'hooks';

interface IStateProps {
    businesses: IBusiness[];
};

type PropsType = IStateProps & IBusinessActions;

export const Component: React.FC<PropsType> = ({
    businesses,
    fetchBusinesses,
    setBusinesses,
}) => {
    const fetchBusinessesRequest = useNetworkRequest<IBusiness[]>();
    React.useEffect(() => {
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

    return <BusinessList businesses={businesses} />;
};

const mapStateToProps = (state: IApplicationState): IStateProps => {
    return {
        businesses: state.business.list,
    };
};

export default connect(mapStateToProps, BusinessActions)(Component);
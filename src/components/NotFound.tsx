import * as React from 'react';
import 'components/NotFound.scss';
import { FormattedMessage } from 'react-intl';

const NotFound: React.FC = () => {
	return <div className='not-found-view'><FormattedMessage id='business.not-found' /></div>;
};

export default NotFound;

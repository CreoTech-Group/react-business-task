import * as React from 'react';
import "react-activity/dist/Spinner.css";
import { Spinner } from "react-activity";
import 'components/LoadingIndicator.scss';

const LoadingIndicator: React.FC = () => {
	return <div data-testid='loading-indicator' className='loading-indicator'><Spinner /></div>;
};

export default LoadingIndicator;

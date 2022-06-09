import * as React from 'react';
import { IErrorInfo } from 'store/contracts';

export interface IProps {
	error: IErrorInfo;
}

const ErrorMessage: React.FC<IProps> = ({ error }) => {
	return <div>{error.genericMessage}</div>;
};

export default ErrorMessage;

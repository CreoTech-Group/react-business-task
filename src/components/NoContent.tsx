import * as React from 'react';
import 'components/NoContent.scss';

interface IProps {
    message: string;
}

const NoContent: React.FC<IProps> = ({ message }) => {
	return <div className='no-content-view'>{message}</div>;
};

export default NoContent;

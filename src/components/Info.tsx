import * as React from 'react';

import { IInfo } from 'models';

import 'components/Info.scss';

interface IProps {
	data: IInfo;
}

const Info: React.FC<IProps> = ({ data }) => {
	const renderRow = React.useCallback((rowInfo: string, index: number) => {
		return (
			<div key={index} className='info-row'>{rowInfo}</div>
		);
	}, []);

	return (
		<div className='info'>
			<div className='info-title'>
				{data.title}
			</div>
			{data.rows.map(renderRow)}
		</div>
	);
};

export default Info;

import React from 'react';
import { useIntl } from 'react-intl';
import { IErrorInfo } from 'store/contracts';

interface IStateProps {
	isLoading: boolean;
	error?: IErrorInfo;
}

interface INetworkResult<T> {
	isLoading: boolean;
	error?: IErrorInfo;
	fetch: (callback: () => Promise<T>) => Promise<T | undefined>;
	clearError: () => void;
}

function createErrorInfo(genericMessage: string, errorResponse: any) {
	if (!errorResponse) {
		return undefined;
	}

	return {
		errorObject: errorResponse,
		genericMessage,
	};
}

export default function useNetworkRequest<T>(): INetworkResult<T> {
	const [state, setState] = React.useState<IStateProps>({
		isLoading: false,
		error: undefined,
	});

	const intl = useIntl();

	const fetch = React.useCallback(
		async (callback: () => Promise<T>) => {
			if (state.isLoading) {
				return undefined;
			}

			let errorResponse: any;
			try {
				setState({
					...state,
					isLoading: true,
					error: undefined,
				});
				const res = await callback();
				return res;
			} catch (err: any) {
				errorResponse = err;
			} finally {
				setTimeout(() => {
					const genericMessage = intl.formatMessage({ id: 'app.generic-error' });
                    setState({
                        ...state,
                        isLoading: false,
                        error: createErrorInfo(genericMessage, errorResponse),
                    });
                }, 2000);
			}
		},
		[intl, state],
	);

	const clearError = React.useCallback(() => {
		setState({
			...state,
			error: undefined,
		});
	}, [state]);

	return {
		isLoading: state.isLoading,
		error: state.error,
		fetch,
		clearError,
	};
}

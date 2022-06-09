import Axios from 'axios';
import { IBusiness } from 'models'
import { Reducer } from 'redux';
import { UnwrapReduxThunk } from 'store/types';

export interface IBusinessState {
    list: IBusiness[];
}

const initialState: IBusinessState = {
    list: [],
};

const SET_BUSINESS_LIST = 'SET_BUSINESS_LIST';

function setBusinesses(list: IBusiness[]) {
	return {
		type: SET_BUSINESS_LIST,
		data: list,
	};
}

function fetchBusinesses() {
	return async (dispatch: any) => {
		const response = await Axios.get<IBusiness[]>('https://feinterviewtask.azurewebsites.net/b/6231abada703bb67492d2b8f');
		return response.data;
	};
}

const actions = {
	fetchBusinesses,
	setBusinesses,
};

export type IBusinessActions = UnwrapReduxThunk<typeof actions>;
export const BusinessActions: IBusinessActions = actions as any;

const reducer: Reducer<IBusinessState> = (state: IBusinessState = initialState, action: any) => {
	if (action.type === SET_BUSINESS_LIST) {
		return { ...state, list: action.data };
	}

  	return state;
}

export default reducer;
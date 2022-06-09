import { IBusinessState } from "store/slices/business";

export interface IApplicationState {
    business: IBusinessState;
}

export interface IErrorInfo {
	genericMessage: string;
	errorObject: any;
}

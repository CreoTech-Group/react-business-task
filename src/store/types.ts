import { IApplicationState } from "./contracts";

type ReduxThunk = (dispatch: any, getState: () => IApplicationState) => any;
type Function = (...args: any) => any;

export type UnwrapReduxThunk<Type> = {
	[Key in keyof Type]: Type[Key] extends Function
		? ReturnType<Type[Key]> extends ReduxThunk
			? (...args: Parameters<Type[Key]>) => ReturnType<ReturnType<Type[Key]>>
			: Type[Key]
		: Type[Key];
};

export type Optional<T> = T | undefined;

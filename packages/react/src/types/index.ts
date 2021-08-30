import { IModule, IModuleStore } from 'redux-dynamic-modules';
import { Action, Reducer } from '@ez-dux/core';

export type Module<State> = Omit<IModule<State>, 'reducerMap'> & {
  reducerMap?: Record<string, Reducer<Action<any, string, any>, State>>;
};
export type Store<RootState> = IModuleStore<RootState>;

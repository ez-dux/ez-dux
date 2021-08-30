import { Action, Reducer } from '@ez-dux/core';
import { IModule, IModuleStore } from 'redux-dynamic-modules';

export type Module<State> = Omit<IModule<State>, 'reducerMap'> & {
  reducerMap?: Record<string, Reducer<Action<any, string, any>, State>>;
};
export type Store<RootState> = IModuleStore<RootState>;

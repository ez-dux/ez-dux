import { ActionCreator } from '@ez-dux/core';
import { U } from 'ts-toolbelt';

export type { Saga } from 'redux-saga';

export interface AsyncActionCreators<
  Result = undefined,
  Payload = undefined,
  Meta = undefined,
  E = Error
> {
  start: ActionCreator<Payload, string, Meta>;
  success: ActionCreator<Result, string, Meta>;
  error: ActionCreator<E, string, Meta>;
  dismissError: ActionCreator<null, string, Meta>;
  reset: ActionCreator<null, string, Meta>;
}

export class AsyncState<Result, Payload, E = Error> {
  loading = false;
  data: U.Nullable<Result> = null;
  error: U.Nullable<E> = null;
  request: U.Nullable<Payload> = null;
}

export interface CreateModuleConfig<Result, Payload, Meta> {
  namespace: string;
  asyncFunction: (payload: Payload, meta: Meta) => Promise<Result>;
  actionName: string;
}

import { createReducer } from '@ez-dux/core';
import { Module } from '@ez-dux/react';
import update from 'immutability-helper';

import { createActionCreators } from '../actions';
import { createSaga } from '../saga';
import { AsyncActionCreators, AsyncState, CreateModuleConfig } from '../types';

export function createModule<Result, Payload, Meta = undefined, E = Error>({
  namespace,
  actionName,
  asyncFunction,
}: CreateModuleConfig<Result, Payload, Meta>): Module<
  AsyncState<Result, Payload, E>
> {
  const actions = createActionCreators<Result, Payload, Meta, E>(
    namespace,
    actionName,
  );
  type Actions =
    | AsyncActionCreators<Result, Payload, Meta, E>['start']
    | AsyncActionCreators<Result, Payload, Meta, E>['success']
    | AsyncActionCreators<Result, Payload, Meta, E>['error']
    | AsyncActionCreators<Result, Payload, Meta, E>['reset']
    | AsyncActionCreators<Result, Payload, Meta, E>['dismissError'];

  const INITIAL_STATE = new AsyncState<Result, Payload, E>();

  const reducer = createReducer<Actions, AsyncState<Result, Payload, E>>(
    INITIAL_STATE,
  );
  // @ts-ignore
  reducer.addCase(actions.start, (state, { payload }) =>
    update(state, {
      // @ts-ignore
      request: { $set: payload },
      loading: { $set: true },
      error: { $set: null },
    }),
  );
  // @ts-ignore
  reducer.addCase(actions.success, (state, { payload }) =>
    update(state, {
      // @ts-ignore
      data: { $set: payload },
      loading: { $set: false },
      error: { $set: null },
    }),
  );
  // @ts-ignore
  reducer.addCase(actions.error, (state, { payload }) =>
    update(state, {
      loading: { $set: false },
      // @ts-ignore
      error: { $set: payload },
    }),
  );

  // @ts-ignore
  reducer.addCase(actions.dismissError, (state) =>
    update(state, {
      error: { $set: null },
    }),
  );
  // @ts-ignore
  reducer.addCase(actions.reset, () => INITIAL_STATE);
  const saga = createSaga<Result, Payload, Meta, E>(asyncFunction, actions);

  return {
    id: namespace,
    // @ts-ignore
    reducerMap: {
      [namespace]: reducer,
    },
    sagas: [saga],
  };
}

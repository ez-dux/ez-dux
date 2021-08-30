import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { Function, O } from 'ts-toolbelt';

import { AsyncActionCreators, Saga } from '../types';

interface Options {
  take: 'every' | 'latest';
}
export function createSaga<
  Result,
  Payload,
  Meta,
  E = Error,
  RootState = O.Object
>(
  asyncFunction: Function.Function<[Payload, RootState, Meta], Promise<Result>>,
  actionCreators: AsyncActionCreators<Result, Payload, Meta, E>,
  options: Options = { take: 'latest' },
): Saga {
  function* myWorker(action) {
    try {
      const state = yield select();
      const result = yield call(
        asyncFunction,
        action.payload,
        state,
        action.meta,
      );
      yield put(actionCreators.success(result, action.meta));
    } catch (e) {
      yield put(actionCreators.error(e as E, action.meta));
    }
  }

  function* mySaga() {
    if (options.take === 'latest') {
      yield takeLatest(actionCreators.start.type, myWorker);
    } else if (options.take === 'every') {
      yield takeEvery(actionCreators.start.type, myWorker);
    }
  }

  return mySaga;
}

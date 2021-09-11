import { createSelector } from '@ez-dux/core';
import { useSelector } from 'react-redux';
import { U } from 'ts-toolbelt';

export function createAsyncDataHooks<Result, Payload, E = Error>(
  namespace: string,
): {
  useData: () => U.Nullable<Result>;
  useLoading: () => boolean;
  useError: () => U.Nullable<E>;
  useRequest: () => U.Nullable<Payload>;
} {
  const dataSelector = createSelector<U.Nullable<Result>>(namespace, 'data');
  const loadingSelector = createSelector<boolean>(namespace, 'loading');
  const errorSelector = createSelector<U.Nullable<E>>(namespace, 'error');
  const requestSelector = createSelector<U.Nullable<Payload>>(
    namespace,
    'request',
  );

  function useData() {
    return useSelector(dataSelector);
  }
  function useLoading() {
    return useSelector(loadingSelector);
  }
  function useError() {
    return useSelector(errorSelector);
  }
  function useRequest() {
    return useSelector(requestSelector);
  }
  return { useData, useLoading, useError, useRequest };
}

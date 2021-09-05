import { createSelector } from '@ez-dux/core';
import { useSelector } from 'react-redux';

export function createAsyncDataHooks<Result, Payload, E = Error>(
  namespace: string,
) {
  const dataSelector = createSelector<Result | null>(namespace, 'data');
  const loadingSelector = createSelector<boolean>(namespace, 'loading');
  const errorSelector = createSelector<E | null>(namespace, 'error');
  const requestSelector = createSelector<Payload | null>(namespace, 'request');

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

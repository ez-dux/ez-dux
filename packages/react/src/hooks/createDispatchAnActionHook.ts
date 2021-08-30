import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionCreator } from '@ez-dux/core';

export function createDispatchAnActionHook<
  AC extends ActionCreator<string, string, string>
>(actionCreator: AC) {
  return function useDispatchAnActionHook(): (
    payload: ReturnType<AC>['payload'],
    meta: ReturnType<AC>['meta'],
  ) => void {
    const dispatch = useDispatch();
    return useCallback(
      (payload, meta) => {
        dispatch(actionCreator(payload, meta));
      },
      [dispatch],
    );
  };
}

export function createDispatchAnActionHookOnMount<
  AC extends ActionCreator<string, string, string>
>(actionCreator: AC) {
  return function useDispatchAnActionHook(
    payload: ReturnType<AC>['payload'],
    meta: ReturnType<AC>['meta'],
  ): void {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(actionCreator(payload, meta));
    }, [dispatch, payload, meta]);
  };
}

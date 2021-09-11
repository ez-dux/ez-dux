import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { F } from 'ts-toolbelt';

export function createDispatchAnActionHook<AC extends F.Function>(
  actionCreator: AC,
) {
  return function useDispatchAnActionHook(): (
    payload: ReturnType<AC>['payload'],
    meta: ReturnType<AC>['meta'],
  ) => void {
    const dispatch = useDispatch();
    return useCallback(
      (payload, meta) => {
        // @ts-ignore
        dispatch(actionCreator(payload, meta));
      },
      [dispatch],
    );
  };
}

export function createDispatchAnActionHookOnMount<AC extends F.Function>(
  actionCreator: AC,
) {
  return function useDispatchAnActionHook(
    payload: ReturnType<AC>['payload'],
    meta: ReturnType<AC>['meta'],
  ): void {
    const dispatch = useDispatch();
    useEffect(() => {
      // @ts-ignore
      dispatch(actionCreator(payload, meta));
    }, [dispatch, payload, meta]);
  };
}

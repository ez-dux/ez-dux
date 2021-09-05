import {
  createDispatchAnActionHook,
  createDispatchAnActionHookOnMount,
} from '@ez-dux/react';

import { AsyncActionCreators } from '../types';

export function createAsyncActionHooks<
  ACS extends AsyncActionCreators<any, any, any>
>(
  actionCreators: ACS,
): {
  useStart;
  useStartOnMount;
  useDismissError;
  useSuccess;
  useReset;
  useError;
} {
  // @ts-ignore
  const useStart = createDispatchAnActionHook(actionCreators.start);
  const useStartOnMount = createDispatchAnActionHookOnMount(
    // @ts-ignore
    actionCreators.start,
  );
  const useDismissError = createDispatchAnActionHookOnMount(
    // @ts-ignore
    actionCreators.dismissError,
  );
  // @ts-ignore
  const useSuccess = createDispatchAnActionHookOnMount(actionCreators.success);
  // @ts-ignore
  const useReset = createDispatchAnActionHookOnMount(actionCreators.reset);
  // @ts-ignore
  const useError = createDispatchAnActionHookOnMount(actionCreators.error);
  return {
    useStart,
    useStartOnMount,
    useDismissError,
    useSuccess,
    useReset,
    useError,
  };
}

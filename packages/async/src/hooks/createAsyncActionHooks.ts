import {
  createDispatchAnActionHook,
  createDispatchAnActionHookOnMount,
} from '@ez-dux/react';
import { A, F, O } from 'ts-toolbelt';

export function createAsyncActionHooks<ACS extends O.Object>(
  actionCreators: ACS,
): {
  useStart: F.Function<
    [],
    (
      payload: ReturnType<A.At<ACS, 'start'>>['payload'],
      meta?: ReturnType<A.At<ACS, 'start'>>['meta'],
    ) => void
  >;
  useStartOnMount: F.Function<
    [
      ReturnType<A.At<ACS, 'start'>>['payload'],
      ReturnType<A.At<ACS, 'start'>>['meta'],
    ],
    void
  >;
  useDismissError: F.Function;
  useSuccess: F.Function;
  useReset: F.Function;
  useError: F.Function;
} {
  const useStart = createDispatchAnActionHook<A.At<ACS, 'start'>>(
    actionCreators.start,
  );
  const useStartOnMount = createDispatchAnActionHookOnMount<A.At<ACS, 'start'>>(
    actionCreators.start,
  );
  const useDismissError = createDispatchAnActionHook<A.At<ACS, 'dismissError'>>(
    actionCreators.dismissError,
  );
  const useSuccess = createDispatchAnActionHook<A.At<ACS, 'success'>>(
    actionCreators.success,
  );
  const useReset = createDispatchAnActionHook<A.At<ACS, 'reset'>>(
    actionCreators.reset,
  );
  const useError = createDispatchAnActionHook<A.At<ACS, 'error'>>(
    actionCreators.error,
  );
  return {
    useStart,
    useStartOnMount,
    useDismissError,
    useSuccess,
    useReset,
    useError,
  };
}

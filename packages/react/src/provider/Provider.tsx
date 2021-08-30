import React from 'react';
import { useAsync } from 'react-async-hook';
import { Provider as ReduxProvider } from 'react-redux';
import { O } from 'ts-toolbelt';

import { Store } from '../types';

interface ProviderProps<R extends O.Object> {
  createStore: () => Promise<Store<R>>;
  children: React.ReactNode;
  Loader?: React.FC;
}
export function Provider<R extends O.Object>({
  createStore,
  children,
  Loader,
}: ProviderProps<R>): React.ReactElement | null {
  const { result, loading } = useAsync<Store<R>>(createStore, []);

  if (loading && Loader) {
    return <Loader />;
  }
  if (result) {
    return <ReduxProvider store={result}>{children}</ReduxProvider>;
  }
  return null;
}

Provider.defaultProps = {
  Loader: function Loader() {
    return <></>;
  },
};

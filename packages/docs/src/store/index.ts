import { getSagaExtension } from '@ez-dux/async';
import { Store } from '@ez-dux/react';
import { createStore } from '@ez-dux/react';

import { ageModule, AgeState, NAMESPACE } from './age';

interface RootState {
  [NAMESPACE]: AgeState;
}

// eslint-disable-next-line import/prefer-default-export
export async function initStore(): Promise<Store<RootState>> {
  return createStore<RootState>(
    {
      initialState: {},
      extensions: [getSagaExtension({})],
    },
    ageModule
  );
}

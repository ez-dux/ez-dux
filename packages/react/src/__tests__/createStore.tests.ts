import { expect } from 'chai';

import { createStore } from '../store';

class State {
  data: string[] | null = null;
  loading = false;
}

interface RootState {
  namespace: State;
}

describe('Tests provider function', () => {
  it('is a function', () => {
    expect(createStore).to.be.a('function');
  });
  it('returns a object', () => {
    const store = createStore<RootState>({
      initialState: {},
      extensions: [],
      enhancers: [],
    });
    expect(store).to.be.a('object');
  });
});

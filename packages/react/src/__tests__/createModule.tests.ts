import { expect } from 'chai';

import { createModule } from '../module';

class State {
  data: string[] | null = null;
  loading = false;
}

describe('Tests provider function', () => {
  it('is a function', () => {
    expect(createModule).to.be.a('function');
  });
  it('returns a object', () => {
    const module = createModule<State>({
      id: 'namespace',
    });
    expect(module).to.be.a('object');
  });
});

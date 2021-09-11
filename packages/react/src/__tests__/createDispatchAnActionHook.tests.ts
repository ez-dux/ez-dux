import { expect } from 'chai';

import { createDispatchAnActionHook } from '../hooks';

describe('Tests createDispatchAnActionHook function', () => {
  it('is a function', () => {
    expect(createDispatchAnActionHook).to.be.a('function');
  });
});

import { expect } from 'chai';
import { createModule } from '../module';

interface Result {
  items: string[];
}

interface Payload {
  search: string;
}

interface Meta {
  uuid: string;
}

async function getSomething(payload: Payload, meta: Meta): Promise<Result> {
  console.log(payload, meta);
  return { items: ['a', 'b'] };
}
describe('Tests provider function', () => {
  it('is a function', () => {
    expect(createModule).to.be.a('function');
  });
  it('returns a object', () => {
    const module = createModule<Result, Payload, Meta>({
      namespace: 'namespace',
      actionName: 'search',
      asyncFunction: getSomething,
    });
    expect(module).to.be.a('object');
  });
});

import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import join from 'lodash/join';
import { Object } from 'ts-toolbelt';

import { Selector } from '../types';

export function createSelector<I, R extends Object.Object = Object.Object>(
  ...entries: string[]
): Selector<I, R> {
  return function selector(state: R): I {
    if (state && !isEmpty(entries)) {
      return get(state, join(entries, '.'));
    }
    throw new Error('The root state its empty or you didnt pass any entry');
  };
}

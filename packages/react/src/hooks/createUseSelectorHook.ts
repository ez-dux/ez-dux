import { useSelector } from 'react-redux';
import { Selector } from '@ez-dux/core';
import { O } from 'ts-toolbelt';

export function createUseSelectorHook<
  S extends Selector<O.Object, ReturnType<S>>
>(selector: S) {
  return function useSelectorHook(): () => ReturnType<S> {
    return useSelector(selector) as () => ReturnType<S>;
  };
}

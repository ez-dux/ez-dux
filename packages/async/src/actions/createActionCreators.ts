import { AsyncActionCreators } from '../types';
import { createActionCreator } from '@ez-dux/core';
import toUpper from 'lodash/toUpper';

export function createActionCreators<Result, Payload, Meta, E>(
  namespace: string,
  actionName: string,
): AsyncActionCreators<Result, Payload, Meta, E> {
  return {
    start: createActionCreator(`${namespace}/${toUpper(actionName)}/START`),
    success: createActionCreator(`${namespace}/${toUpper(actionName)}/SUCCESS`),
    error: createActionCreator(`${namespace}/${toUpper(actionName)}/ERROR`),
    reset: createActionCreator(`${namespace}/${toUpper(actionName)}/RESET`),
    dismissError: createActionCreator(
      `${namespace}/${toUpper(actionName)}/DISMISS_ERROR`,
    ),
  };
}

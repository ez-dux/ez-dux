import {
  AsyncState,
  createAsyncActionHooks,
  createAsyncDataHooks,
  createModule,
} from '@ez-dux/async';

export const NAMESPACE = 'age-module';

export interface Result {
  name: string;
  age: number;
  count: number;
}

export interface Payload {
  name: string;
}

export class AgeState extends AsyncState<Result, Payload> {
  age = 78;
}

async function guessNameByAge(payload: Payload): Promise<Result> {
  const res = await fetch(`https://api.agify.io/?name=${payload.name}`);
  return res.json();
}
export const { module: ageModule, actionCreators } = createModule<
  Result,
  Payload
>({
  actionName: 'guessNameByAge',
  namespace: NAMESPACE,
  asyncFunction: guessNameByAge,
});

export const { useStart } = createAsyncActionHooks(actionCreators);
export const { useData, useLoading, useRequest } = createAsyncDataHooks<
  Result,
  Payload
>(NAMESPACE);

# @ez-dux/core
[Docs](https://ez-dux.web.app/)
# Summary
Library to make life easier when using redux.

# Motivation
Redux boilerplate is hard and extensive.

# Functions
- createActionCreator();
```jsx
import { createActionCreator } from '@ez-dux/core';

const actionCreator = createActionCreator<Payload, Meta>('actionName');

// actionCreator(payload, meta) returns an action object like:

{
    type: 'actionName', 
    payload: Payload,
    meta: Meta,
}
```
You may want to use the meta property to pass some relevant id
for your logic, some global loader boolean, it's all up to you.

- createReducer();
```jsx
import { createActionCreator, createReducer, createHandlers } from '@ez-dux/core';

class State {
  data: string[] | null = null;
}

const INITIAL = new State();

const addData = createActionCreator<Payload>('addData');

const reducer = createReducer<Action, State>(INITIAL);

reducer.addCase(addData, (state, action) => ({
   ...state,
   data: action.payload,
}));
```

- createSelector();

```jsx
import { createSelector } from '@ez-dux/core';

const selector = createSelector<State['namespace']['variable']>(
      'namespace',
      'variable'
    );
```
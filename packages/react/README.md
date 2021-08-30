# @ez-dux/react

- createStore();
```tsx
import { Store } from '@ez-dux/react';
import { createStore } from '@ez-dux/react';

interface RootState {
    [NAMESPACE]: AgeState;
}
export async function initStore(): Promise<Store<RootState>> {
    // YOU CAN FETCH YOUR INITIAL STATE FROM YOUR LOCAL STORAGE OR 
    // FROM A REMOTE URL BEFORE INIT THE REDUX.
    return createStore<RootState>(
        {
            initialState: {
                [NAMESPACE]: {
                    age: 99,
                },
            },
        },
            ageModule
    );
}

```

- createModule();

```jsx
import { createModule } from '@ez-dux/react';

export const ageModule = createModule<AgeState>({
    id: NAMESPACE,
    reducerMap: {
        [NAMESPACE]: reducer,
    },
});
```

- Provider
```tsx
import { Provider } from '@ez-dux/react';
// createStore being be an async function to handle the initialState from local storage both web and react native

const App = () => {
	return (
		<ReduxProvider createStore={createStore}>....</ReduxProvider>
	);
}
```

- createDispatchAnActionHook();
- createDispatchAnActionHookOnMount();
```tsx
import { createUseSelectorHook } from '@ez-dux/react';
import { createActionCreator } from '@ez-dux/core';

const changeAgeActionCreator = createActionCreator<number>('change-age');

const useChangeAgeStart = createDispatchAnActionHook(changeAgeActionCreator);
const useChangeAgeStartOnMount = createDispatchAnActionHookOnMount(changeAgeActionCreator);

```
- createUseSelectorHook();
```tsx
import { createActionCreator } from '@ez-dux/core';
import { createUseSelectorHook } from '@ez-dux/react';

const ageSelector = createSelector<number>(NAMESPACE, 'age')

const useAgeState = createUseSelectorHook(ageSelector);
```
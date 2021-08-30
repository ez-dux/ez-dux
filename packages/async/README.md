# @ez-dux/async

- epics, sagas and thunk extension

```tsx
import { getSagaExtension, getThunkExtension, getObservableExtension } from "@ez-dux/async";
```

- createAsyncActionCreators();

```tsx
import { createAsyncActionCreators } from "@ez-dux/async";

const asyncActionCreators = createAsyncActionCreators<Result, Payload, Meta, E>(NAMESPACE, 'LOAD_START');
```

- createSaga();
```tsx
import { createSaga } from "@ez-dux/async";

const asyncFunction = async (): Promise<Result> => { ... };
const saga = createSaga({
	asyncActionCreators,
	asyncFunction,
});
```

- createModule();
```tsx
import { createModule } from "@ez-dux/async";

const NAMESPACE = 'my-module';

const myModule = createModule({
    namespace: NAMESPACE,
    actionName: 'my-action',
    asyncFunction: (payload, meta) => {...},
});
```
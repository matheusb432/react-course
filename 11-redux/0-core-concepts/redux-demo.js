// NOTE Redux is a JS library so it can be used in any JS environment
const redux = require('redux');

// NOTE Reducer function that will manipulate the state with a dispatched action
const counterReducer = (state = { counter: 0 }, action) => {
  const { type, payload } = action;
  const { counter } = state;

  if (type === 'increment') {
    return { ...state, counter: counter + 1 };
  }

  if (type === 'decrement') {
    return { ...state, counter: counter - 1 };
  }

  if (type === 'add') {
    return { ...state, counter: counter + payload };
  }

  return state;
};

// NOTE Both the reducer and subscriber will be executed by Redux, so only the pointer to the function is passed
const store = redux.legacy_createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  // NOTE will trigger on every state update because of the subscription on line 33
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// NOTE dispatching an action
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'add', payload: -15 });

import { emptyUser } from './../types/user';
import { AppState, initialAuthState, initialCounterState } from './reducer';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { StateSlices } from './types';
import { User } from '../types';

const counterSlice = createSlice({
  name: StateSlices.Counter,
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      // NOTE Redux toolkit uses immer.js to allow us to change the state directly without actually mutating it.
      // NOTE Immer.js is a library that allows us to write code that mutates a temporary copy of the state, resulting in immutable state updates.
      state.counter++;
    },
    // NOTE The state type is inferred from the initialState type.
    decrement: (state) => {
      state.counter--;
    },
    // NOTE Introducing easy type safety to payload actions with PayloadAction<T>.
    add: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    // * Equivalent syntax to increment, decrement and add props
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
    reset(state) {
      state = structuredClone(initialCounterState);
    },
  },
});

const authSlice = createSlice({
  name: StateSlices.Auth,
  initialState: initialAuthState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = emptyUser;
    },
  },
});

// NOTE [Redux Toolkit] Configuring the store
const store = configureStore<AppState>({
  // NOTE The reducer prop can be a single reducer function or an object of slice reducers.
  //   reducer: counterSlice.reducer,
  // NOTE setting a map of reducers so that the store can merge multiple reducers
  reducer: {
    [StateSlices.Counter]: counterSlice.reducer,
    [StateSlices.Auth]: authSlice.reducer,
  },
});

// NOTE [Redux Toolkit] Directly exporting the actions from the slice.
const counterActions = counterSlice.actions;
const authActions = authSlice.actions;

const counterState = store.getState()[StateSlices.Counter];
const authState = store.getState()[StateSlices.Auth];

export default store;
export { counterActions, authActions };

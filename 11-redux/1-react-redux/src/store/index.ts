import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { counterReducer } from './counter';
import { StateSlices, AppState } from './types';

// NOTE [Redux Toolkit] Configuring the store
const store = configureStore<AppState>({
  // NOTE The reducer prop can be a single reducer function or an object of slice reducers.
  //   reducer: counterSlice.reducer,
  // NOTE setting a map of reducers so that the store can merge multiple reducers
  reducer: {
    [StateSlices.Counter]: counterReducer,
    [StateSlices.Auth]: authReducer,
  },
});

export default store;

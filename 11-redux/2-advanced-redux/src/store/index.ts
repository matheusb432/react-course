import { configureStore } from '@reduxjs/toolkit';

import { useDispatch, useSelector } from 'react-redux';
import { cartSlice } from './cart-slice';
import { AppState } from './types';
import { uiSlice } from './ui-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
});

// NOTE hook for type safe useSelector
const useAppSelector = <T>(selector: (state: AppState) => T) =>
  useSelector<AppState, T>(selector);

type AppDispatch = typeof store.dispatch;
// TODO to useCallback?
const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, useAppSelector, useAppDispatch };
export type { AppDispatch };

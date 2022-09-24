import { useDispatch } from 'react-redux';
import store from './index';

export enum CounterActions {
  Increment = 'INCREMENT',
  Decrement = 'DECREMENT',
  Add = 'ADD',
  Reset = 'RESET',
  Toggle = 'TOGGLE',
}

export enum StateSlices {
  Counter = 'counter',
  Auth = 'auth',
}

// NOTE Creating a typed dispatch hook
// * (https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type)
export type CounterDispatch = typeof store.dispatch;
export const useCounterDispatch = () => useDispatch<CounterDispatch>();

// TODO fix type
export type AuthDispatch = typeof store.dispatch;
export const useAuthDispatch = () => useDispatch<AuthDispatch>();

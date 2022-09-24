import { useDispatch } from 'react-redux';
import store from '..';

export enum CounterActions {
  Increment = 'INCREMENT',
  Decrement = 'DECREMENT',
  Add = 'ADD',
  Reset = 'RESET',
  Toggle = 'TOGGLE',
}

// NOTE Creating a typed dispatch hook
// * (https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type)
export type CounterDispatch = typeof store.dispatch;
export const useCounterDispatch = () => useDispatch<CounterDispatch>();

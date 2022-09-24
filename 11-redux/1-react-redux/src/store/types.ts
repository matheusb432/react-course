import { useDispatch } from 'react-redux';
import { AuthState } from './auth';
import { CounterState } from './counter';
import store from '.';

export enum StateSlices {
  Counter = 'counter',
  Auth = 'auth',
}

export interface AppState {
  counter: CounterState;
  auth: AuthState;
}

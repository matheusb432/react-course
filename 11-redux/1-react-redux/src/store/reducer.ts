import { emptyUser } from './../types/user';
import { CounterActions } from './types';

import { User } from '../types';

interface AppState {
  counter: CounterState;
  auth: AuthState;
}

interface CounterAction {
  type: CounterActions;
  payload?: number;
}

interface CounterState {
  counter: number;
  showCounter: boolean;
}

const initialCounterState: CounterState = {
  counter: 0,
  showCounter: true,
};

// NOTE [Redux] Reducer function without redux toolkit
// const counterReducer: Reducer<CounterState, CounterAction> = (
//   state = initialState,
//   action: CounterAction
// ): CounterState => {
//   const { type, payload } = action;
//   const { counter, showCounter } = state;
//   switch (type) {
//     case CounterActions.Increment:
//        NOTE [Redux] The returned state will overwrite the existing state.
//        * so it's always necessary to use the spread operator to copy the existing state.
//       return { ...state, counter: counter + 1 };
//     case CounterActions.Decrement:
//       return { ...state, counter: counter - 1 };
//     case CounterActions.Add:
//       if (payload == null) return { ...state };
//       return { ...state, counter: counter + payload };
//     case CounterActions.Toggle:
//       return { ...state, showCounter: !showCounter };
//     case CounterActions.Reset:
//       return structuredClone(initialState);
//     default:
//       return { ...state };
//   }
// };

interface AuthState {
  isLoggedIn: boolean;
  user: User;
}

const initialAuthState: AuthState = {
  isLoggedIn: false,
  user: emptyUser,
};

// export { counterReducer, initialState };
export { initialCounterState, initialAuthState };
// export type { CounterState, CounterAction };
export type { AppState, CounterAction, CounterState, AuthState };

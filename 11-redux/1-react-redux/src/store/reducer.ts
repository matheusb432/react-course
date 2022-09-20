import { CounterActions } from './types';
import { Reducer } from 'redux';

interface CounterAction {
  type: CounterActions;
  payload?: number;
}

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action: CounterAction
): CounterState => {
  const { type, payload } = action;
  const { counter } = state;

  switch (type) {
    case CounterActions.Increment:
      return { ...state, counter: counter + 1 };

    case CounterActions.Decrement:
      return { ...state, counter: counter - 1 };

    case CounterActions.Add:
      if (payload == null) return { ...state };

      return { ...state, counter: counter + payload };

    case CounterActions.Reset:
      return structuredClone(initialState);

    default:
      return { ...state };
  }
};

export { counterReducer, initialState };
export type { CounterState, CounterAction };

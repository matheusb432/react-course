import { CounterActions } from './types';
import { Reducer } from 'redux';

interface CounterAction {
  type: CounterActions;
  payload?: number;
}

interface CounterState {
  counter: number;
  showCounter: boolean;
}

const initialState: CounterState = {
  counter: 0,
  showCounter: true,
};

const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action: CounterAction
): CounterState => {
  const { type, payload } = action;
  const { counter, showCounter } = state;

  switch (type) {
    case CounterActions.Increment:
      // NOTE The returned state will overwrite the existing state.
      // * so it's always necessary to use the spread operator to copy the existing state.
      return { ...state, counter: counter + 1 };

    case CounterActions.Decrement:
      return { ...state, counter: counter - 1 };

    case CounterActions.Add:
      if (payload == null) return { ...state };

      return { ...state, counter: counter + payload };

    case CounterActions.Toggle:
      return { ...state, showCounter: !showCounter };

    case CounterActions.Reset:
      return structuredClone(initialState);

    default:
      return { ...state };
  }
};

export { counterReducer, initialState };
export type { CounterState, CounterAction };

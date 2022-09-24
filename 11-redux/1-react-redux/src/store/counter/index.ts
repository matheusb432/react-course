import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSlices } from '../types';
import { CounterActions, useCounterDispatch } from './types';

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

// NOTE [Redux Toolkit] Directly exporting the actions from the slice.
const counterActions = counterSlice.actions;
const counterReducer = counterSlice.reducer;

export {
  initialCounterState,
  counterReducer,
  counterActions,
  useCounterDispatch,
  CounterActions,
};
export type { CounterAction, CounterState };

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

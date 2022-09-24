import { createSlice } from '@reduxjs/toolkit';
import { StateSlices } from './types';

interface UiState {
  cartIsVisible: boolean;
}

const initialUiState: UiState = { cartIsVisible: false };

const uiSlice = createSlice({
  name: StateSlices.Ui,
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

const uiActions = uiSlice.actions;

export { uiSlice, uiActions };
export type { UiState };

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NotificationData } from '../types';
import { deepClone } from '../util';
import { StateSlices } from './types';

interface UiState {
  cartIsVisible: boolean;
  notification: NotificationData | null;
  isInitial: boolean;
}

const initialUiState: UiState = {
  cartIsVisible: false,
  notification: null,
  isInitial: true,
};

const uiSlice = createSlice({
  name: StateSlices.Ui,
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action: PayloadAction<NotificationData>) {
      state.notification = deepClone(action.payload);
    },
    // * Due to React.StrictMode, it's necessary to move isInitial to the store so it can be updated via a pure function.
    initialize(state) {
      state.isInitial = false;
    },
  },
});

const uiActions = uiSlice.actions;

export { uiSlice, uiActions };
export type { UiState };

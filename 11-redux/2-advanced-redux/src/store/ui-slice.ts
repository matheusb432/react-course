import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '.';
import { NotificationData, NotificationTypes } from '../types';
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

// NOTE basic action creators for notification dispatching
const showPendingNotification = (
  dispatch: AppDispatch,
  message = 'Fetching data...'
) => {
  dispatch(
    uiActions.showNotification({
      status: NotificationTypes.Pending,
      title: 'Pending...',
      message,
    })
  );
};

const showSuccessNotification = (
  dispatch: AppDispatch,
  message = 'Request succesfully made!'
) => {
  dispatch(
    uiActions.showNotification({
      status: NotificationTypes.Success,
      title: 'Success!',
      message,
    })
  );
};

const showErrorNotification = (
  dispatch: AppDispatch,
  message = 'Error fetching data!'
) => {
  dispatch(
    uiActions.showNotification({
      status: NotificationTypes.Error,
      title: 'Error!',
      message,
    })
  );
};

export {
  uiSlice,
  uiActions,
  showPendingNotification,
  showSuccessNotification,
  showErrorNotification,
};
export type { UiState };

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '.';
import { ICartItemModel, RequestConfig } from '../types';
import {
  showErrorNotification,
  showPendingNotification,
  showSuccessNotification,
} from './ui-slice';

interface CartState {
  items: ICartItemModel[];
  total: number;
  changed: boolean;
}

const initialCartState: CartState = {
  items: [],
  total: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ICartItemModel>) {
      const { payload: newItem } = action;
      // TODO test with destructured props if the state still updates?
      // const {items, total} = state;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (newItem == null) return;

      state.total++;
      state.changed = true;
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action: PayloadAction<string>) {
      const { payload: id } = action;
      const existingItem = state.items.find((item) => item.id === id);

      state.total--;
      state.changed = true;

      if (existingItem == null) return;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    replaceCart(state, action: PayloadAction<CartState>) {
      const {
        payload: { items, total },
      } = action;

      state.items = items ?? [];
      state.total = total;
    },
  },
});

// NOTE Handling side effects with Thunks, an action creator which returns a function that eventually dispatches an action.
const sendCartData = (
  cart: CartState,
  sendRequest: (requestConfig: RequestConfig) => Promise<void>
) => {
  // * Does not need to be async in this specific case.
  return async (dispatch: AppDispatch) => {
    showPendingNotification(dispatch, 'Sending cart data...');

    sendRequest({
      url: 'cart.json',
      options: {
        method: 'PUT',
        body: JSON.stringify({ items: cart.items, total: cart.total }),
      },
      handleData() {
        showSuccessNotification(dispatch, 'Sent cart data successfully!');
      },
      handleError() {
        showErrorNotification(dispatch, 'Failed to send cart data!');
      },
    });
  };
};

const fetchCartData = (
  sendRequest: (requestConfig: RequestConfig) => Promise<void>
) => {
  return async (dispatch: AppDispatch) => {
    showPendingNotification(dispatch, 'Fetching cart data...');
    sendRequest({
      url: 'cart.json',
      options: { method: 'GET' },
      handleData(data: CartState) {
        dispatch(cartActions.replaceCart(data));
        showSuccessNotification(dispatch, 'Fetched cart data successfully!');
      },
      handleError() {
        showErrorNotification(dispatch, 'Failed to fetch cart data!');
      },
    });
  };
};

const cartActions = cartSlice.actions;

export { cartSlice, cartActions, sendCartData, fetchCartData };
export type { CartState };

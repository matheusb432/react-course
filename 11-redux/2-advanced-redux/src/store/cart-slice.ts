import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useAppDispatch } from '.';
import { CartItemModel, ICartItemModel } from '../types';

interface CartState {
  items: ICartItemModel[];
  total: number;
}

const initialCartState: CartState = {
  items: [],
  total: 0,
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
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const { payload: id } = action;
      const existingItem = state.items.find((item) => item.id === id);

      state.total--;

      if (existingItem == null) return;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

const cartActions = cartSlice.actions;

export { cartSlice, cartActions };
export type { CartState };

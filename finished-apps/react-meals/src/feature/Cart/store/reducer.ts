import { DUMMY_ITEMS } from '../../../data/dummy-cart-items';
import { CartItemModel } from '../CartItem';
import { CartActions } from './types';

interface CartAction {
  type: CartActions;
  payload: CartItemModel;
}

interface CartState {
  items: CartItemModel[];
}

const initialState: CartState = {
  // TODO remove dummy items
  items: DUMMY_ITEMS,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  const { items } = state;
  const { type, payload } = action;

  switch (type) {
    case CartActions.AddToCart: {
      const { id } = payload;

      // NOTE important reminder - no state can be mutated in a reducer or any pure function
      // * so it's necessary to create a deep clone of the object to change it.
      const item = structuredClone(items.find((item) => item.id === id));

      if (item == null) return { ...state, items: [...items, payload] };

      item.amount = (item.amount ?? 0) + payload.amount!;

      return {
        ...state,
        items: [...items.filter((x) => x.id !== id), item],
      };
    }
    case CartActions.DecrementCartItem: {
      const item = structuredClone(
        items.find((item) => item.id === payload.id)
      );
      const { id } = payload;

      if (!item?.amount) return state;

      item.amount--;

      if (!item.amount)
        return cartReducer(state, {
          type: CartActions.RemoveFromCart,
          payload: item,
        });

      return {
        ...state,
        items: [...items.filter((x) => x.id !== id), item],
      };
    }
    case CartActions.RemoveFromCart: {
      return {
        ...state,
        items: items.filter((item) => item.id !== payload.id),
      };
    }
    case CartActions.ClearCart:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export { cartReducer, initialState };
export type { CartState, CartAction };

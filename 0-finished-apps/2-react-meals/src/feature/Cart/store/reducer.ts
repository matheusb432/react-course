import { DUMMY_ITEMS } from '../../../data/dummy-cart-items';
import { CartItemModel } from '../CartItem';
import { CartActions } from './types';

interface CartAction {
  type: CartActions;
  payload?: CartItemModel;
}

interface CartState {
  items: CartItemModel[];
  totalAmount: number;
}

const initialState: CartState = {
  // TODO remove dummy items
  items: DUMMY_ITEMS,
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  const { items } = state;
  const { type, payload } = action;

  switch (type) {
    case CartActions.AddToCart: {
      if (payload == null) return state;

      const { id } = payload;
      let newItems = [];

      // NOTE important reminder - no state can be mutated in a reducer or any pure function
      // * so it's necessary to create a deep clone of the object to change it.
      const item = structuredClone(items.find((item) => item.id === id));

      if (item == null) {
        newItems = [...items, payload];
      } else {
        item.amount = (item.amount ?? 0) + payload.amount!;
        newItems = [...items.filter((x) => x.id !== id), item];
      }

      return dispatchTotalAmount({
        ...state,
        items: newItems,
      });
    }

    case CartActions.DecrementCartItem: {
      if (payload == null) return state;

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

      return dispatchTotalAmount({
        ...state,
        items: [...items.filter((x) => x.id !== id), item],
      });
    }

    case CartActions.RemoveFromCart: {
      if (payload == null) return state;

      return dispatchTotalAmount({
        ...state,
        items: items.filter((item) => item.id !== payload.id),
      });
    }

    case CartActions.ClearCart:
      return structuredClone(initialState);

    case CartActions.UpdateTotalAmount:
      const amounts = items
        ?.map((x) => x.amount)
        ?.filter((x) => x != null) as number[];
      const totalAmount = amounts?.reduce((a, b) => a + b, 0);

      return {
        ...state,
        totalAmount: totalAmount ?? 0,
      };

    default:
      return state;
  }
};

const dispatchTotalAmount = (newState: CartState): CartState =>
  cartReducer(newState, { type: CartActions.UpdateTotalAmount });

export { cartReducer, initialState };
export type { CartState, CartAction };

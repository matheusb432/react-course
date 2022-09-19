import { DUMMY_ITEMS } from '../../../data/dummy-cart-items';
import { CartItemModel } from '../CartItem';
import { CartActions } from './types';

interface CartAction {
  type: CartActions;
  payload?: CartItemModel | CartItemModel[];
}

interface CartState {
  items: CartItemModel[];
  totalAmount: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: getTotalAmount([]),
  totalPrice: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  const { items } = state;
  const { type, payload } = action;

  switch (type) {
    case CartActions.SetCart:
      if (!isCartItems(payload)) return state;

      return dispatchDependentValues({
        ...state,
        items: payload as CartItemModel[],
      });

    case CartActions.AddToCart: {
      if (!isCartItem(payload)) return state;

      const cartItem = payload as CartItemModel;
      const { id } = cartItem;
      let newItems = [];

      // NOTE important reminder - no state can be mutated in a reducer or any pure function
      // * so it's necessary to create a deep clone of the object to change it.
      const item = structuredClone(items.find((item) => item.id === id));

      if (item == null) {
        newItems = [...items, cartItem];
      } else {
        item.amount = (item.amount ?? 0) + cartItem.amount!;
        newItems = [...items.filter((x) => x.id !== id), item];
      }

      return dispatchDependentValues({
        ...state,
        items: newItems,
      });
    }

    case CartActions.DecrementCartItem: {
      if (!isCartItem(payload)) return state;

      const cartItem = payload as CartItemModel;

      const item = structuredClone(
        items.find((item) => item.id === cartItem.id)
      );
      const { id } = cartItem;

      if (!item?.amount) return state;

      item.amount--;

      if (item.amount <= 0)
        return cartReducer(state, {
          type: CartActions.RemoveFromCart,
          payload: item,
        });

      return dispatchDependentValues({
        ...state,
        items: [...items.filter((x) => x.id !== id), item],
      });
    }

    case CartActions.RemoveFromCart: {
      if (!isCartItem(payload)) return state;

      const cartItem = payload as CartItemModel;

      return dispatchDependentValues({
        ...state,
        items: items.filter((item) => item.id !== cartItem.id),
      });
    }

    case CartActions.ClearCart:
      return structuredClone(initialState);

    case CartActions.UpdateDependentValues:
      return {
        ...state,
        totalAmount: getTotalAmount(items),
        totalPrice: getTotalPrice(items),
      };

    case CartActions.UpdateTotalPrice:
      return { ...state, totalPrice: getTotalPrice(items) };

    case CartActions.UpdateTotalAmount:
      return {
        ...state,
        totalAmount: getTotalAmount(items),
      };

    default:
      return state;
  }
};

const dispatchDependentValues = (newState: CartState): CartState =>
  cartReducer(newState, { type: CartActions.UpdateDependentValues });

function getTotalAmount(items: CartItemModel[]): number {
  const amounts = items
    ?.map((x) => x.amount)
    ?.filter((x) => x != null) as number[];

  return amounts?.reduce((a, b) => a + b, 0) ?? 0;
}

function getTotalPrice(items: CartItemModel[]): number {
  const prices = items
    ?.map((x) => (x.price ?? 0) * (x.amount ?? 0))
    ?.filter((x) => x != null);

  return prices?.reduce((a, b) => a + b, 0) ?? 0;
}

function isCartItems(items: any): boolean {
  return Array.isArray(items);
}

function isCartItem(payload: any): boolean {
  return payload != null && !Array.isArray(payload);
}

export { cartReducer, initialState };
export type { CartState, CartAction };

import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { CartAction, cartReducer, CartState, initialState } from './reducer';
import { CartActions } from './types';

interface CartContextProps {
  cartState: CartState;
  cartDispatch: Dispatch<CartAction>;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps>({
  cartState: {} as any,
  cartDispatch: () => {},
});

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  // TODO remove
  useEffect(() => {
    cartDispatch({ type: CartActions.UpdateTotalAmount });
  }, []);

  return (
    <CartContext.Provider value={{ cartDispatch, cartState }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartContextProvider };

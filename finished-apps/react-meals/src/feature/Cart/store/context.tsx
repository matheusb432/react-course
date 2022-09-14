import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { CartAction, cartReducer, CartState, initialState } from './reducer';

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
  // TODO implement 'dispatchCart, cartState' here
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartDispatch, cartState }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartContextProvider };

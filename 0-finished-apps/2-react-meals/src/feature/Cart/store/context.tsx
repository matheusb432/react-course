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

interface CartContextProps {
  cartState: CartState;
  cartDispatch: Dispatch<CartAction>;
  totalAmount: number;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextProps>({
  cartState: {} as any,
  cartDispatch: () => {},
  totalAmount: 0,
});

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  const { items } = cartState;

  const [totalAmount, setTotalAmount] = useState(0);

  const getCartCount = useCallback(() => {
    const amounts = items
      .map((x) => x.amount)
      .filter((x) => x != null) as number[];

    return amounts.reduce((a: number, b: number) => a + b, 0);
  }, [items]);

  useEffect(() => {
    setTotalAmount(getCartCount());
  }, [getCartCount]);

  return (
    <CartContext.Provider value={{ cartDispatch, cartState, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartContextProvider };

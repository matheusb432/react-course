import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { useHttp } from '../../../hooks';
import { FirebaseResponse } from '../../../types';
import { mapFirebaseResponse } from '../../../utils';
import { CartItemModel } from '../CartItem';
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
  const { items } = cartState;

  const {
    isLoading: isLoadingCart,
    error: errorCart,
    request: requestCart,
  } = useHttp();

  const handleFetchCart = useCallback(
    (data: FirebaseResponse<CartItemModel>) => {
      cartDispatch({
        type: CartActions.SetCart,
        payload: mapFirebaseResponse(data),
      });
    },
    []
  );

  const fetchCartOptions = useMemo(
    () => ({
      method: 'GET',
      url: '/cart.json',
      handleData: handleFetchCart,
    }),
    [handleFetchCart]
  );

  useEffect(() => {
    requestCart(fetchCartOptions);
  }, [requestCart, fetchCartOptions]);

  return (
    <CartContext.Provider value={{ cartDispatch, cartState }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
export { CartContextProvider };

import { useContext } from 'react';
import CartContext from '../store/context';

const useCartContext = () => useContext(CartContext);

export { useCartContext };

import { CartItemModel } from '../CartItem';

export interface Order {
  id?: string;
  name: string;
  address: string;
  cartItems?: CartItemModel[];
}

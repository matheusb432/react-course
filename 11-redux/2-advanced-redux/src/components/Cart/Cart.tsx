import { useAppSelector } from '../../store';

import Card from '../UI/Card';
import classes from './Cart.module.scss';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;

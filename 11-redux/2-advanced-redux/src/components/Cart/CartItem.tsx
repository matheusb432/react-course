import { useAppDispatch } from '../../store';
import { cartActions } from '../../store/cart-slice';
import { CartItemModel, ICartItemModel } from '../../types';
import classes from './CartItem.module.scss';

interface CartItemProps {
  item: ICartItemModel;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const { title, quantity, totalPrice, price, id } = item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    const newItem = CartItemModel.fromNewProps(id, price, title);

    dispatch(cartActions.addItemToCart(newItem.toSerializable()));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

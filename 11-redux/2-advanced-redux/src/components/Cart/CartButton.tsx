import { useAppDispatch, useAppSelector } from '../../store';

import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.scss';

const CartButton = () => {
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector((state) => state.cart.total);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

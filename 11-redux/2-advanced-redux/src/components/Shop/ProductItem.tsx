import { useAppDispatch } from '../../store';

import { cartActions } from '../../store/cart-slice';
import { CartItemModel } from '../../types';
import Card from '../UI/Card';
import classes from './ProductItem.module.scss';

interface ProductItemProps {
  id: string;
  title: string;
  price: number;
  description: string;
}

const ProductItem = ({ title, price, description, id }: ProductItemProps) => {
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    const newItem = CartItemModel.fromNewProps(id, price, title);

    dispatch(cartActions.addItemToCart(newItem.toSerializable()));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

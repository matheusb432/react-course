import { CartItemModel } from './cart-item-model';
import styles from './style.module.scss';

interface CartItemProps {
  item: CartItemModel;
  onAdd: (item: CartItemModel) => void;
  onRemove: (item: CartItemModel) => void;
}

const CartItem = ({ item, onAdd, onRemove }: CartItemProps) => {
  const { id, name, price, amount } = item;

  const formattedPrice = `$${price!.toFixed(2)}`;

  return (
    <li className={styles['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{formattedPrice}</span>
          <span className={styles.amount}>x {amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={() => onRemove(item)}>−</button>
        <button onClick={() => onAdd(item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

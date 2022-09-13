import { CartItemModel } from './cart-item-model';
import styles from './style.module.scss';

interface CartItemProps {
  id?: string;
  name: string;
  price: number;
  amount: number;
  onAdd: (id?: string) => void;
  onRemove: (id?: string) => void;
}

const CartItem = ({
  id,
  name,
  price,
  amount,
  onAdd,
  onRemove,
}: CartItemProps) => {
  const formattedPrice = `$${price.toFixed(2)}`;

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
        <button onClick={() => onRemove(id)}>−</button>
        <button onClick={() => onAdd(id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

import styles from './style.module.scss';

interface CartItemProps {
  name: string;
  price: number;
  amount: number;
  onAdd: () => void;
  onRemove: () => void;
}

const CartItem = ({ name, price, amount, onAdd, onRemove }: CartItemProps) => {
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
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

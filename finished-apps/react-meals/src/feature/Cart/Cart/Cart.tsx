import { CartItemModel } from '../CartItem';
import CartItem from '../CartItem/CartItem';
import styles from './style.module.scss';

interface CartProps {
  items: CartItemModel[];
}

const Cart = ({ items }: CartProps) => {
  const handleAddItem = () => {};

  const handleRemoveItem = () => {};
  return (
    <>
      <ul className={styles['cart-items']}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onAdd={handleAddItem}
            onRemove={handleRemoveItem}
          />
        ))}
      </ul>
      <div className={styles['total-amount']}></div>
    </>
  );
};

export { Cart };

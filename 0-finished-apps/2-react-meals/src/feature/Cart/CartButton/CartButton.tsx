import { ReactNode } from 'react';
import { CartIcon } from '../CartIcon';
import { useCartContext } from '../hooks';
import styles from './style.module.scss';

interface CartButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const CartButton = ({ children, onClick }: CartButtonProps) => {
  const { totalAmount } = useCartContext();

  return (
    <div className={styles.bump}>
      <button className={styles.button} onClick={onClick}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        {children}
        <div className={styles.badge}>{totalAmount}</div>
      </button>
    </div>
  );
};

export { CartButton };

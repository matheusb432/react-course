import { ReactNode } from 'react';
import { CartIcon } from '../CartIcon';
import styles from './style.module.scss';

interface CartButtonProps {
  children: ReactNode;
  items: number;
  onClick: () => void;
}

const CartButton = ({ children, items, onClick }: CartButtonProps) => {
  return (
    <div className={styles.bump}>
      <button className={styles.button} onClick={onClick}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        {children}
        <div className={styles.badge}>{items}</div>
      </button>
    </div>
  );
};

export { CartButton };

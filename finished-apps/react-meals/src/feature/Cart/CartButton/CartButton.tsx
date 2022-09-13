import { ReactNode } from 'react';
import styles from './style.module.scss';

interface CartButtonProps {
  children: ReactNode;
  onClick: () => void;
}

const CartButton = ({ children, onClick }: CartButtonProps) => {
  return (
    <div className={styles.bump}>
      <button className={styles.button} onClick={onClick}>
        {children}
        <div className={styles.icon}></div>
        <div className={styles.badge}></div>
      </button>
    </div>
  );
};

export { CartButton };

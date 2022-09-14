import { ReactNode } from 'react';
import styles from './style.module.scss';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: (...args: any[]) => void;
}

const Button = ({
  children,
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button}`}
      onClick={onClick}>
      <div className={styles.children}>{children}</div>
    </button>
  );
};

export { Button };

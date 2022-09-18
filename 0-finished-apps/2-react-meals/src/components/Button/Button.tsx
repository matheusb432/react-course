import { ReactNode } from 'react';
import styles from './style.module.scss';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: (...args: any[]) => void;
  outlineStyle?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = ({
  children,
  disabled = false,
  onClick,
  type = 'button',
  outlineStyle = false,
  isLoading = false,
  loadingText = 'Loading...',
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`${styles.button} ${outlineStyle ? styles.outline : ''}`}
      onClick={onClick}>
      <div className={styles.children}>
        {isLoading ? loadingText : children}
      </div>
    </button>
  );
};

export { Button };

import { ReactNode } from 'react';
import styles from './style.module.scss';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <article className={styles.card}>{children}</article>;
};

export { Card };

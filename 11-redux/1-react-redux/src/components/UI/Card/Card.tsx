import styles from './Card.module.scss';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <section className={styles.card}>{children}</section>;
};

export { Card };

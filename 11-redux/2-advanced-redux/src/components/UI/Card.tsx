import { ReactNode } from 'react';
import classes from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <section className={`${classes.card} ${className}`}>{children}</section>
  );
};

Card.defaultProps = {
  className: '',
};

export default Card;

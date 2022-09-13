import styles from './style.module.scss';

interface AvailableMealsProps {
  children: React.ReactNode;
}

const AvailableMeals = ({ children }: AvailableMealsProps) => {
  return <>{children}</>;
};

export { AvailableMeals };

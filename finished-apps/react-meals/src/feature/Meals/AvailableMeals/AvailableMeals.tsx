import { useCallback } from 'react';
import { CartItemModel } from '../../Cart';
import CartItem from '../../Cart/CartItem/CartItem';
import styles from './style.module.scss';

interface AvailableMealsProps {
  meals: CartItemModel[];
}

const AvailableMeals = ({ meals }: AvailableMealsProps) => {
  const handleAddMeal = (id?: string) => {};
  const handleRemoveMeal = (id?: string) => {};

  const renderMeals = useCallback(() => {
    return meals.map((meal) => {
      return (
        <CartItem
          {...meal}
          amount={1}
          onAdd={handleAddMeal}
          onRemove={handleRemoveMeal}
        />
      );
    });
  }, [meals]);

  return <section className={styles.meals}>{'meals'}</section>;
};

export { AvailableMeals };

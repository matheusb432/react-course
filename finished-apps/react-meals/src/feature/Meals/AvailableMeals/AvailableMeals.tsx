import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Card } from '../../../components';
import { CartItemModel } from '../../Cart';
import CartItem from '../../Cart/CartItem/CartItem';
import { MealItem } from '../MealItem';
import styles from './style.module.scss';

interface AvailableMealsProps {
  meals: CartItemModel[];
}

const AvailableMeals = ({ meals }: AvailableMealsProps) => {
  const [renderedMeals, setRenderedMeals] = useState<ReactNode[]>([]);

  const renderMeals = useCallback(() => {
    return meals.map((meal) => {
      return <MealItem meal={meal} onAddMeal={() => handleAddMeal(meal.id)} />;
    });
  }, [meals]);

  useEffect(() => {
    setRenderedMeals(renderMeals());
  }, [renderMeals, meals]);

  const handleAddMeal = (id?: string) => {};

  return (
    <Card>
      <section className={styles.meals}>{renderedMeals}</section>
    </Card>
  );
};

export { AvailableMeals };

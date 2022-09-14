import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Card } from '../../../components';
import { MealItem } from '../MealItem';
import { Meal } from '../types';
import styles from './style.module.scss';

interface AvailableMealsProps {
  meals: Meal[];
}

const AvailableMeals = ({ meals }: AvailableMealsProps) => {
  const [renderedMeals, setRenderedMeals] = useState<ReactNode[]>([]);

  const renderMeals = useCallback(() => {
    return meals.map((meal) => {
      const id = meal.id ?? Math.random().toString();
      return (
        <MealItem key={id} meal={meal} onAddMeal={() => handleAddMeal(id)} />
      );
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

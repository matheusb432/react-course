import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Card } from '../../../components';
import { CartItemModel } from '../../Cart';
import { useCartContext } from '../../Cart/hooks';
import { CartActions } from '../../Cart/store';
import { MealItem } from '../MealItem';
import { Meal } from '../types';
import styles from './style.module.scss';

interface AvailableMealsProps {
  meals: Meal[];
}

const AvailableMeals = ({ meals }: AvailableMealsProps) => {
  const [renderedMeals, setRenderedMeals] = useState<ReactNode[]>([]);
  const { cartDispatch } = useCartContext();

  const handleAddMeal = useCallback(
    (id?: string, amount?: number) => {
      const meal = meals.find((meal) => meal.id === id);

      cartDispatch({
        type: CartActions.AddToCart,
        payload: CartItemModel.fromMealWithAmount(meal!, amount!),
      });

      alert(`Added ${amount} ${meal!.name} to cart!`);
    },
    [cartDispatch, meals]
  );

  const renderMeals = useCallback(() => {
    return meals.map((meal) => {
      const id = meal.id ?? Math.random().toString();
      return <MealItem key={id} meal={meal} onAddMeal={handleAddMeal} />;
    });
  }, [handleAddMeal, meals]);

  useEffect(() => {
    setRenderedMeals(renderMeals());
  }, [renderMeals, meals]);

  return <section className={styles.meals}>{renderedMeals}</section>;
};

export { AvailableMeals };

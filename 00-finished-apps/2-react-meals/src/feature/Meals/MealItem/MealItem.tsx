import { useState } from 'react';
import { Button } from '../../../components/Button';
import { MealItemForm } from '../MealItemForm';
import { Meal } from '../types/meal';
import styles from './style.module.scss';

interface MealItemProps {
  meal: Meal;
  onAddMeal: (id?: string, amount?: number) => void;
}

const MealItem = ({ meal, onAddMeal }: MealItemProps) => {
  const { id, name, price, description } = meal;

  return (
    <article className={styles.meal}>
      <div className={styles['meal-info']}>
        <h3>{name}</h3>
        <span className={styles.description}>{description}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <MealItemForm id={id!} onAddMeal={onAddMeal} />
    </article>
  );
};

export { MealItem };

import { useState } from 'react';
import { Button } from '../../../components/Button';
import { Meal } from '../types/meal';
import styles from './style.module.scss';

interface MealItemProps {
  meal: Meal;
  onAddMeal: (id?: string, amount?: number) => void;
}

const MealItem = ({ meal, onAddMeal }: MealItemProps) => {
  const { id, name, price, description } = meal;
  const [amount, setAmount] = useState(1);

  return (
    <article className={styles.meal}>
      <div className={styles['meal-info']}>
        <h3>{name}</h3>
        <span className={styles.description}>{description}</span>
        <span className={styles.price}>${price}</span>
      </div>
      <div className={styles['meal-actions']}>
        <div className={styles.amount}>
          <span>Amount</span>
          <input type="number" value={amount} />
        </div>
        <Button onClick={() => onAddMeal(id, amount)}>+ Add</Button>
      </div>
    </article>
  );
};

export { MealItem };

import { Button } from '../../../components/Button';
import { Meal } from '../types/meal';
import styles from './style.module.scss';

interface MealItemProps {
  meal: Meal;
  onAddMeal: (id?: string) => void;
}

const MealItem = ({ meal, onAddMeal }: MealItemProps) => {
  const { name, price, description } = meal;

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
          <input type="number" />
        </div>
        <Button onClick={onAddMeal}>+ Add</Button>
      </div>
    </article>
  );
};

export { MealItem };

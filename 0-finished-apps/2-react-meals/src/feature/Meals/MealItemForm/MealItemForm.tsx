import { useState } from 'react';
import { Button, Input } from '../../../components';
import styles from './style.module.scss';

interface MealItemFormProps {
  id: string;
  onAddMeal: (id?: string, amount?: number) => void;
}

const MealItemForm = ({ id, onAddMeal }: MealItemFormProps) => {
  const [amount, setAmount] = useState(1);

  const handleAddClick = () => {
    setAmount(1);

    onAddMeal(id, amount);
  };

  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        // NOTE passing HTML attributes directly to the input element
        input={{
          id: 'inputAmount',
          type: 'number',
          value: amount,
          onChange: (e) => setAmount(+e.target.value),
        }}
      />
      <Button onClick={handleAddClick}>+ Add</Button>
    </form>
  );
};

export { MealItemForm };

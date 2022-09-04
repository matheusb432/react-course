import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { Expense } from '../../types';

interface NewExpenseProps {
  onAddExpense: (value: Expense) => void;
}

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const saveExpenseHandler = (value: Expense) => {
    const expenseData = {
      ...value,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;
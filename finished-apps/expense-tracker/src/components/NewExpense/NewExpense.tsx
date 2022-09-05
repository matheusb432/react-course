import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { Expense } from '../../types';

interface NewExpenseProps {
  onAddExpense: (value: Expense) => void;
}

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const saveExpenseHandler = (value: Expense) => {
    const expenseData: Expense = {
      ...value,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpense;

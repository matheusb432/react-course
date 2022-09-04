import { Expense } from '../../types';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

interface ExpensesProps {
  expenses: Expense[];
}

const Expenses = ({ expenses }: ExpensesProps) => {
  const renderExpenses = () =>
    expenses.map(({ date, title, amount }, index) => (
      <ExpenseItem key={index} date={date} title={title} amount={amount} />
    ));

  return <div className="expenses">{renderExpenses()}</div>;
};

export default Expenses;

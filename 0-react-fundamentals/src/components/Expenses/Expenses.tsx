import { ExpenseItemProps } from '../../model/expense-item';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

interface ExpensesProps {
  expenses: ExpenseItemProps[];
}

const Expenses = ({ expenses }: ExpensesProps) => {
  const renderExpenses = () =>
    expenses.map(({ date, title, price }, index) => (
      <ExpenseItem key={index} date={date} title={title} price={price} />
    ));

  return <div className="expenses">{renderExpenses()}</div>;
};

export default Expenses;

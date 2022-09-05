import { Expense } from '../../types';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

interface ExpensesListProps {
  items: Expense[];
  year: string;
}

const ExpensesList = ({ items, year }: ExpensesListProps) => {
  const renderExpenses = () => {
    const hasData = items?.length > 0;

    return hasData ? (
      items?.map(({ id, date, title, amount }) => (
        <ExpenseItem key={id} date={date} title={title} amount={amount} />
      ))
    ) : (
      <p style={{ color: '#fff' }}>No expenses found.</p>
    );
  };

  return <ul className="expense-list">{renderExpenses()}</ul>;
};

export default ExpensesList;

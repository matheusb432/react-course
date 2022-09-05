import { Expense } from '../../types';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

interface ExpensesProps {
  children: JSX.Element | JSX.Element[];
  expenses: Expense[];
  year: string;
}

const Expenses = ({ children, expenses, year }: ExpensesProps) => {
  const renderExpenses = () =>
    expenses
      .filter((e) => !year || e.date.getFullYear() === +year)
      .map(({ date, title, amount }, index) => (
        <ExpenseItem key={index} date={date} title={title} amount={amount} />
      ));

  return (
    <Card styleClass="expenses">
      <>
        {children}
        {renderExpenses()}
      </>
    </Card>
  );
};

export default Expenses;

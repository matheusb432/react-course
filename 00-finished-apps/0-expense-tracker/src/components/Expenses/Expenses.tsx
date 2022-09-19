import { useEffect, useState } from 'react';
import { Expense } from '../../types';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

interface ExpensesProps {
  children: JSX.Element | JSX.Element[];
  expenses: Expense[];
  year: string;
}

const Expenses = ({ children, expenses, year }: ExpensesProps) => {
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    setFilteredExpenses(
      expenses?.filter((e) => !year || e.date.getFullYear() === +year) ?? []
    );
  }, [expenses, year]);

  return (
    <Card styleClass="expenses">
      <>
        {children}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} year={year} />
      </>
    </Card>
  );
};

export default Expenses;

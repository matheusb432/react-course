import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { ExpenseItemProps } from './components/Expenses/ExpenseItem';
import { Expense } from './types';

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { title: 'Car Insurance', amount: 550, date: new Date(2021, 2, 21) },
    { title: 'New Desk', amount: 150, date: new Date(2021, 4, 21) },
    { title: 'RTX 3060', amount: 350, date: new Date(2021, 6, 1) },
    { title: 'RGB Super Glasses', amount: 1500, date: new Date(2021, 2, 7) },
  ]);

  const addExpenseHandler = (value: Expense) => {
    setExpenses((prevState) => [...prevState, value]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
  // ? JSX without syntatic sugar
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'Lets get started'),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
};

export default App;

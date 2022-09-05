import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import NewExpense from './components/NewExpense/NewExpense';
import { Expense } from './types';

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: Math.random().toString(),
      title: 'New Card',
      amount: 550,
      date: new Date(2020, 2, 21),
    },
    {
      id: Math.random().toString(),
      title: 'Desk Insurance',
      amount: 150,
      date: new Date(2021, 4, 21),
    },
    {
      id: Math.random().toString(),
      title: 'Car Insurance',
      amount: 550,
      date: new Date(2020, 2, 21),
    },
    {
      id: Math.random().toString(),
      title: 'New Desk',
      amount: 150,
      date: new Date(2021, 4, 21),
    },
    {
      id: Math.random().toString(),
      title: 'RTX 3060',
      amount: 350,
      date: new Date(2021, 6, 1),
    },
    {
      id: Math.random().toString(),
      title: 'RGB Super Glasses',
      amount: 1500,
      date: new Date(2021, 2, 7),
    },
    {
      id: Math.random().toString(),
      title: 'RTX 4060',
      amount: 350,
      date: new Date(2022, 6, 1),
    },
    {
      id: Math.random().toString(),
      title: 'SSuper Glasses',
      amount: 1500,
      date: new Date(2022, 2, 7),
    },
  ]);
  const [year, setYear] = useState('2022');

  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevState) => [...prevState, expense]);
  };

  const changeYear = (event: any) => {
    setYear(event.target.value);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} year={year}>
        <ExpensesFilter year={year} onChangeYear={changeYear} />
      </Expenses>
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

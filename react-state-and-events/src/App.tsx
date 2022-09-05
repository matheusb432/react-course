import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import NewExpense from './components/NewExpense/NewExpense';
import { Expense } from './types';

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { title: 'New Card', amount: 550, date: new Date(2020, 2, 21) },
    { title: 'Desk Insurance', amount: 150, date: new Date(2021, 4, 21) },
    { title: 'Car Insurance', amount: 550, date: new Date(2020, 2, 21) },
    { title: 'New Desk', amount: 150, date: new Date(2021, 4, 21) },
    { title: 'RTX 3060', amount: 350, date: new Date(2021, 6, 1) },
    { title: 'RGB Super Glasses', amount: 1500, date: new Date(2021, 2, 7) },
    { title: 'RTX 4060', amount: 350, date: new Date(2022, 6, 1) },
    { title: 'SSuper Glasses', amount: 1500, date: new Date(2022, 2, 7) },
  ]);
  const [year, setYear] = useState('');

  const addExpenseHandler = (value: Expense) => {
    setExpenses((prevState) => [...prevState, value]);
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

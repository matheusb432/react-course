import React from 'react';
import Expenses from './components/Expenses/Expenses';
import { ExpenseItemProps } from './model/expense-item';

const App = () => {
  const expenses: ExpenseItemProps[] = [
    { title: 'Car Insurance', price: 550, date: new Date(2021, 2, 21) },
    { title: 'New Desk', price: 150, date: new Date(2021, 4, 21) },
    { title: 'RTX 3060', price: 350, date: new Date(2021, 6, 1) },
    { title: 'RGB Super Glasses', price: 1500, date: new Date(2021, 2, 7) },
  ];

  return (
    <div>
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

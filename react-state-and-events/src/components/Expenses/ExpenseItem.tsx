import { useState } from 'react';
import Card from '../UI/Card';
import DateItem from './DateItem';
import './ExpenseItem.css';
import ExpensesFilter from './ExpensesFilter';

export interface ExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}

function ExpenseItem({ date, title: titleText, amount }: ExpenseItemProps) {
  const [title, setTitle] = useState(titleText);
  // const [year, setYear] = useState('');

  const clickHandler = (): void => {
    setTitle(title === 'RTX 3060' ? 'Changed Title' : 'RTX 3060');
  };

  // const changeYear = (event: any) => {
  //   setYear(event.target.value);
  // };

  return (
    <Card styleClass="expense-item">
      <DateItem date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

import { useState } from 'react';
import { ExpenseItemProps } from '../../model/expense-item';
import Card from '../UI/Card';
import DateItem from './DateItem';
import './ExpenseItem.css';

function ExpenseItem({ date, title: titleText, price }: ExpenseItemProps) {
  const [title, setTitle] = useState(titleText);

  const clickHandler = (): void => {
    setTitle(title === 'RTX 3060' ? 'Changed Title' : 'RTX 3060');
  };

  return (
    <Card styleClass="expense-item">
      <DateItem date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

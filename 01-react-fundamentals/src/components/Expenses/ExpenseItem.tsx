import { ExpenseItemProps } from '../../model/expense-item';
import Card from '../UI/Card';
import DateItem from './DateItem';
import './ExpenseItem.css';

function ExpenseItem({ date, title, price }: ExpenseItemProps) {
  return (
    <Card styleClass="expense-item">
      <DateItem date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

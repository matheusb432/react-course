import Card from '../UI/Card';
import DateItem from './DateItem';
import './ExpenseItem.css';

export interface ExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}

function ExpenseItem({ date, title, amount }: ExpenseItemProps) {
  return (
    <li>
      <Card styleClass="expense-item">
        <DateItem date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

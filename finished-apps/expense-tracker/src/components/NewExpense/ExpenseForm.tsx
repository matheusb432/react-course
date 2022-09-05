import './ExpenseForm.css';

import { useState } from 'react';

import { Expense } from '../../types';
import { Button } from '../UI';

interface ExpenseFormProps {
  onSaveExpense: (value: Expense) => void;
}

const ExpenseForm = ({ onSaveExpense }: ExpenseFormProps) => {
  // ? form properties approach
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState<string>('2022-09-04');
  const [isEditing, setIsEditing] = useState(true);

  const titleChangedHandler = (event: any) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangedHandler = (event: any) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangedHandler = (event: any) => {
    setEnteredDate(event.target.value);
  };

  // ? form object approach
  //   const [userInput, setUserInput] = useState<ExpenseUserInput>({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });
  //   const titleChangedHandler = (event: any) => {
  //      ! Wrong approach
  //      setUserInput({
  //        ...userInput,
  //        enteredTitle: event.target.value,
  //      });
  //     setUserInput((prevState) => ({
  //       ...prevState,
  //       enteredTitle: event.target.value,
  //     }));
  //   };
  //   const amountChangedHandler = (event: any) => {
  //     setUserInput((prevState) => ({
  //       ...prevState,
  //       enteredAmount: event.target.value,
  //     }));
  //   };
  //   const dateChangedHandler = (event: any) => {
  //     setUserInput((prevState) => ({
  //       ...prevState,
  //       enteredDate: event.target.value,
  //     }));
  //   };

  const submitHandler = (event: any) => {
    event.preventDefault();

    const expenseData: Expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpense(expenseData);

    clearForm();
  };

  const clearForm = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('2022-09-04');
  };

  const cancelForm = () => {
    setIsEditing(false);
  };

  const startForm = () => {
    setIsEditing(true);
  };

  return isEditing ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <Button type="button" label="Cancel" onClick={cancelForm} />
        <Button label="Add Expense" />
      </div>
    </form>
  ) : (
    <Button type="button" label="Add New Expense" onClick={startForm} />
  );
};

export default ExpenseForm;

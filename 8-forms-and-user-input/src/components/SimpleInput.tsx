import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useInputRef } from '../hooks';

const SimpleInput = () => {
  // NOTE refs to manage input state are ideal when the form value is only important on submit
  const nameInputRef = useInputRef();
  // NOTE while stateful values are ideal when the value is important on every change
  // * Like when validating on every keystroke
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!enteredName.trim()) return;
    console.log(enteredName);

    setEnteredName('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export { SimpleInput };

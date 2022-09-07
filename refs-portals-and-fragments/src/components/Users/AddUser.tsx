import { useRef, useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.scss';

interface AddUserProps {
  onAddUser: (name: string, age: string) => void;
}

const AddUser = (props: AddUserProps) => {
  // NOTE useRef hook, will track the input element which makes it easier to use than useState in this instance
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const ageInputRef = useRef<HTMLInputElement | null>(null);

  const [error, setError] = useState<any>();

  const addUserHandler = (event: any) => {
    event.preventDefault();

    // NOTE acessing input value by useRef, significantly simpler and less code than by useState
    const name = nameInputRef.current!.value;
    const age = ageInputRef.current!.value;
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(name, age);

    nameInputRef.current!.value = '';
    ageInputRef.current!.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          {/* NOTE connecting a ref to an input  */}
          <input id="username" type="text" ref={nameInputRef} />
          {/* NOTE useState equivalent => value={enteredUsername} onChange={usernameChangeHandler} */}
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

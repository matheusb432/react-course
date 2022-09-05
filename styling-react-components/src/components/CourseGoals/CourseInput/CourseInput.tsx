import styles from './CourseInput.module.css';

import { useState } from 'react';

import { InputChangedEvent } from '../../../types/input-changed-event';
import Button from '../../UI/Button/Button';
import styled from 'styled-components';

interface CourseInputProps {
  onAddGoal: (value: string) => void;
}

interface FormControlProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  invalid: boolean;
}

const FormControl = ({ children, className }: FormControlProps) => (
  <div className={className}>{children}</div>
);

// ? Styled component
const StyledFormControl = styled(FormControl)`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.invalid ? 'red' : 'black')};
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
    background: ${(props) => (props.invalid ? '#ffd7d7' : 'transparent')};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;
// &.invalid input {
//   border-color: red;
//   background-color: #ffd7d7;
// }

// &.invalid label {
//   color: red;
// }

const CourseInput = ({ onAddGoal }: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: InputChangedEvent) => {
    const text = event.target.value;

    if (!!text.trim()) setIsValid(true);

    setEnteredValue(text);
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();

    if (!enteredValue.trim()) {
      setIsValid(false);

      return;
    }

    onAddGoal(enteredValue);
  };

  /* // ? Dynamic inline styles 
  style={{
    borderColor: getValidationColor(),
    backgroundColor: !isValid ? 'salmon' : 'transparent',
  }} */

  return (
    <form onSubmit={formSubmitHandler}>
      {/* // ? Acessing class names with kebab case by the ['prop name'] notation */}
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* // ? Styled component being applied */}
      {/* <StyledFormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </StyledFormControl> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

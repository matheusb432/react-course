import { FormEvent, useRef } from 'react';
import { useInputRef } from '../../hooks';

import classes from './TaskForm.module.scss';

interface TaskFormProps {
  onEnterTask: (taskText: string) => void;
  loading: boolean;
}

const TaskForm = ({ onEnterTask, loading }: TaskFormProps) => {
  const taskInputRef = useInputRef();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredValue = taskInputRef.current!.value;

    if (enteredValue.trim().length > 0) {
      onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;

import { ReactNode } from 'react';
import classes from './TaskItem.module.scss';

interface TaskItemProps {
  children: ReactNode;
}

const TaskItem = ({ children }: TaskItemProps) => {
  return <li className={classes.task}>{children}</li>;
};

export default TaskItem;

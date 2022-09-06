import './CourseGoalItem.css';

interface CourseGoalItemProps {
  children: JSX.Element | JSX.Element[];
  id: string;
  onDelete: (id: string) => void;
}

const CourseGoalItem = ({ children, onDelete, id }: CourseGoalItemProps) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;

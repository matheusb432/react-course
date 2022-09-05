import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

interface CourseGoalListProps {
  items: any[];
  onDeleteItem: (args: any) => void;
} 

const CourseGoalList = ({items,onDeleteItem}: CourseGoalListProps) => {
  return (
    <ul className="goal-list">
      {items.map((goal: any) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;

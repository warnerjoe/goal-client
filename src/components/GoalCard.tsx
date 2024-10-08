// GoalCard.tsx
import React from 'react';

// Define the structure of a Goal
interface Goal {
  _id: string; // ID type from your API response
  title: string; // The title of the goal
  completed: boolean; // Status of the goal
}

// Define the props for GoalCard component
interface GoalCardProps {
  goal: Goal; // Define props type to include a goal
}

// GoalCard component definition
const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  return (
    <li key={goal._id}>
      <h3>{goal.title}</h3>
      <p>{goal.completed ? 'Completed' : 'Not Completed'}</p>
    </li>
  );
};

export default GoalCard;

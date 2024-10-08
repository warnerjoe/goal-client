import React, { useEffect, useState } from 'react';

// Define the structure of a Goal
interface Goal {
  id: string;  // Adjust type according to your API response
  title: string; // Adjust type according to your API response
}

const GoalList: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]); // Specify the state type for goals
  const [loading, setLoading] = useState<boolean>(true); // Specify the loading state type
  const [error, setError] = useState<string | null>(null); // Specify the type for error

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await fetch('/api/goals'); // Adjust endpoint if needed
        if (!response.ok) {
          throw new Error('Failed to fetch goals');
        }
        const data: Goal[] = await response.json(); // Specify the expected type of the response
        setGoals(data); // Assuming the API returns an array of goals
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Use the message property
        } else {
          setError('An unknown error occurred'); // Fallback for non-Error objects
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGoals();
  }, []);

  if (loading) {
    return <p>Loading goals...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Goals List</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>{goal.title}</li> // Assuming each goal has an 'id' and 'title'
        ))}
      </ul>
    </div>
  );
};

export default GoalList;

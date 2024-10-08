// AddGoal.tsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddGoal = () => {
  const [goal, setGoal] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!goal) {
      setError('Goal cannot be empty');
      return;
    }

    try {
      const response = await fetch('/api/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: goal }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${errorText}`);
      }

      const result = await response.json();
      console.log('Goal added:', result);
      setGoal(''); // Clear the input after successful submission
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        console.error('Error submitting goal:', err.message);
      } else {
        console.error('Unknown error:', err);
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicGoal">
        <Form.Label>New Goal</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        {error && <p className="text-danger">{error}</p>}
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Goal
      </Button>
    </Form>
  );
};

export default AddGoal;

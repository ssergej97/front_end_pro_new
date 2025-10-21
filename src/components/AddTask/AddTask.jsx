import React from 'react';
import { Form, Button } from 'react-bootstrap';

function AddTask(props) {
  return (
    <>
      <h2>Add a new task</h2>
      <Form.Label htmlFor="inputTask">Title</Form.Label>
      <Form.Control
        placeholder="Enter a task"
        type="text"
        id="inputTask"
        aria-describedby="addTask"
        className="mb-3 w-50"
      />
      <Button variant="success">Add</Button>
    </>
  );
}

export default AddTask;
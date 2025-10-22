import React from 'react';
import { Form, Button } from 'react-bootstrap';
import saveToLocalStorage from "../../utils/localStorage.js";

function AddTask({setTasks}) {
  const handleSubmit = (event) => {
      event.preventDefault();
      const task = event.target.elements[0].value;
      saveToLocalStorage(task);
      setTasks(JSON.parse(localStorage.getItem("tasks")));
  }

  return (
    <>
      <h2>Add a new task</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Label htmlFor="inputTask">Title</Form.Label>
            <Form.Control
                placeholder="Enter a task"
                type="text"
                id="inputTask"
                aria-describedby="addTask"
                className="mb-3 w-50"

            />
            <Button variant="success" type="submit">Add</Button>
        </Form>
    </>
  );
}

export default AddTask;

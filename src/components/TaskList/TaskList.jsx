import React from 'react';
import { Form, Button} from 'react-bootstrap';

function TaskList(props) {
  return (
    <>
      <h2>Task list</h2>
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <Form.Check aria-label="completed" />
          <p className="ms-3 mb-0">Buy apples</p>
        </div>
        <div>
          <Button className="me-3" variant="primary">More detail</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
    </>
  );
}

export default TaskList;
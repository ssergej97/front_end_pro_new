import React from 'react';
import { Form, Button, ListGroup, } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";


function TaskList({tasks}) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Програмна навігація на сторінку TaskDetail
        navigate("/tasks");
    };

  return (
    <>
      <h2>Task list</h2>
        <ListGroup>
            {tasks ? tasks.map((task) => (
                <ListGroup.Item key={task.id} className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex">
                        <Form.Check aria-label="completed" className="me-3"/>
                        <p className="mb-0">{task.title}</p>
                    </div>
                    <div>
                        <Link to={`/tasks/${task.id}`}><Button className="me-3" variant="primary" onClick={handleNavigate}>More detail</Button></Link>
                        <Button variant="danger">Delete</Button>
                    </div>
                </ListGroup.Item>
            )) : <p>No tasks</p>}
        </ListGroup>
    </>
  );
}

export default TaskList;

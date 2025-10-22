import React, {useState} from 'react';
import { Form, Button, ListGroup, } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";


function TaskList({tasks, setTasks}) {
  const deleteTask = (event) => {

      if (event.target.className === "btn btn-danger") {
          const tasks = JSON.parse(localStorage.getItem("tasks"));
          const filteredTasks = tasks.filter((task) => {
              return +task.id !== +event.currentTarget.id;
          })
          localStorage.setItem("tasks", JSON.stringify(filteredTasks));
          setTasks(JSON.parse(localStorage.getItem("tasks")));
      }
  }

  const changeStatus = (event) => {
      console.dir(event.target)
      event.stopPropagation();
      if (event.target.className === "form-check-input") {
          const tasks = JSON.parse(localStorage.getItem("tasks"));
          console.log(event.currentTarget.id)
          tasks.forEach((task) => {
              if (task.id === +event.currentTarget.id) {
                  if (task.status === "active") {
                      task.status = "completed";
                  } else task.status = "active";
              }
          })
          localStorage.setItem("tasks", JSON.stringify(tasks));
          setTasks(JSON.parse(localStorage.getItem("tasks")));
      }
  }

  return (
    <>
      <h2>Task list</h2>
        <ListGroup>
            {tasks ? tasks.map((task) => (
                <ListGroup.Item key={task.id} id={task.id} onClick={deleteTask} className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex">
                        <Form.Check aria-label="completed" id={task.id} className="me-3" onClick={changeStatus}/>
                        <p className="mb-0">{task.title}</p>
                    </div>
                    <div>
                        <Link to={`/tasks/${task.id}`}><Button className="me-3" variant="primary" >More detail</Button></Link>
                        <Button variant="danger">Delete</Button>
                    </div>
                </ListGroup.Item>
            )) : <p>No tasks</p>}
        </ListGroup>
    </>
  );
}

export default TaskList;

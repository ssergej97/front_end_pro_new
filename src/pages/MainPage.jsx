import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { Row, Col } from 'react-bootstrap';

const MainPage = () => {

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

    return (
        <Row>
          <Col>
            <AddTask setTasks={setTasks}></AddTask>
          </Col>
          <Col>
            <TaskList tasks={tasks} setTasks={setTasks}></TaskList>
          </Col>
        </Row>
    );
};

export default MainPage;

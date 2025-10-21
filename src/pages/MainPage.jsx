import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { Row, Col } from 'react-bootstrap';

const MainPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Програмна навігація на сторінку TaskDetail
        navigate('/task-detail');
    };

    return (
        <Row>
          <Col>
            <AddTask></AddTask>
          </Col>
          <Col>
            <TaskList></TaskList>
          </Col>
        </Row>
    );
};

export default MainPage;

import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const MainPage = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Програмна навігація на сторінку TaskDetail
        navigate('/task-detail');
    };

    return (
        <div>
            <h1>Main page</h1>
            <AddTask></AddTask>
            <TaskList></TaskList>
        </div>
    );
};

export default MainPage;

import React, {useEffect, useState} from 'react';
import TaskInfo from "../components/TaskInfo";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Table} from "react-bootstrap";

const TaskDetail = () => {
    const {id} = useParams();
    const [task, setTask] = useState();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/");
    };

    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log(tasks);
        console.log( typeof id);
        const task = tasks.find((task) => +task.id === +id);
        console.log(task);
        setTask(task);
    }, [id]);

    return (
        <>
            <h2 className="mb-3">Task Info</h2>
            {
                task ? <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created at</th>
                        <th>Status</th>
                        <th>Controls</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{task.title}</td>
                        <td>{task.description}</td>
                        <td>{task.createdAt}</td>
                        <td>{task.status}</td>
                        <td><Button variant="dark" size="sm" onClick={handleNavigate}>Back to list</Button></td>
                    </tr>
                    </tbody>
                </Table> : <p>No data</p>
            }
        </>
    );
};

export default TaskDetail;

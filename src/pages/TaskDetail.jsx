import React, {useEffect, useState} from 'react';
import TaskInfo from "../components/TaskInfo";
import {useParams} from "react-router-dom";
import {Button, Table} from "react-bootstrap";

const TaskDetail = () => {
    const {id} = useParams();
    const [task, setTask] = useState();

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
                        <td>5 kg</td>
                        <td>21.20.2025</td>
                        <td>Active</td>
                        <td><Button variant="dark" size="sm">Back to list</Button></td>
                    </tr>
                    </tbody>
                </Table> : <p>No data</p>
            }
        </>
    );
};

export default TaskDetail;

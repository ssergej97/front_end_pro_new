import React from 'react';
import {Button, Table,} from 'react-bootstrap';

function TaskInfo(props) {
  return (
    <>
      <h2 className="mb-3">Task Info</h2>
      <Table striped bordered hover>
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
            <td>Buy apples</td>
            <td>5 kg</td>
            <td>21.20.2025</td>
            <td>Active</td>
            <td><Button variant="dark" size="sm">Back to list</Button></td>
          </tr>
        </tbody>
      </Table>
    </>

  );
}

export default TaskInfo;
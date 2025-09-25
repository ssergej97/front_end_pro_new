import React from "react";
import Form from "./components/Form.jsx";
import TaskList from "./components/TaskList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }

  handleTaskChange = (updatedTaskDetails) => {
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        {
          ...updatedTaskDetails,
          id: crypto?.randomUUID() ?? Date.now().toString(),
          status: true,
          undo: true,
          do: false
        }
      ]
    }))
  }

  handleChangeStatus = (tasks) => {
    this.setState({tasks})
  }


  render() {
    return (
      <>
        <h1 className="m-2">To Do List</h1>
        <TaskList taskList={this.state} onStatus={this.handleChangeStatus}></TaskList>
        <Form task={this.state} onTask={this.handleTaskChange}></Form>
      </>
    );
  }
}

export default App
import React from "react";
import Form from "./components/Form.jsx";
import TaskList from "./components/TaskList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          name: 'Buy apples',
          id: 1,
          undo: true,
          do: false
        },
      ]
    }
  }

  handleTaskChange = (updatedTaskDetails) => {
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        {...updatedTaskDetails, id: prevState.tasks.at(-1).id + 1, status: true,}
      ]
    }))
  }


  render() {
    return (
      <>
        <h1 className="m-2">To Do List</h1>
        <TaskList taskList={this.state}></TaskList>
        <Form task={this.state} onTask={this.handleTaskChange}></Form>
      </>
    );
  }
}

export default App
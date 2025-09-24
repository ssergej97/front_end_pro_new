import React from "react";
import Task from "./components/Task.jsx";
import Form from "./components/Form.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: "Buy bananas"}
  }


  render() {
    return (
      <>
        <h1>To Do List</h1>
        <ul style={{listStyleType: "none", paddingLeft: 0}}>
          <Task task={this.state}></Task>
        </ul>
        <Form task={this.state} onTask={this.setState}></Form>
      </>
    );
  }
}

export default App
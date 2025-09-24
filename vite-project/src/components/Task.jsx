import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};

  }

  render() {
    return (
      <li>
        <button
          type="button"
          className="btn btn-primary"
        >{this.props.task.name}
        </button>
      </li>
    );
  }
}

export default Task
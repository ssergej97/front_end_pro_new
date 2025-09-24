import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    console.log(this.props.onTask);
  }

  render() {
    return (
      <form>
        <input className="me-2" type="text" name="task" value={this.props.task.name} onChange={(e) => this.props.onTask({ name: e.target.value })}/>
        <button
          type="button"
          className="btn btn-primary"
        >Create task
        </button>
      </form>
    );
  }
}

export default Form
import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }


  render() {
    return (
      <form className="ms-2">
        <input
          className="me-2"
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button
          type="button"
          className="btn btn-primary me-2"
          onClick={() => this.props.onTask({ name: this.state.name })}
        >Create task
        </button>
      </form>
    );
  }
}

export default Form
import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new Date().getSeconds()
    }
  }

  render() {
    return (
      <>
        <h1>{this.state.data}</h1>
      </>
    );
  }
}

export default Timer
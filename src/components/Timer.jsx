import React from "react";
import Button from 'react-bootstrap/Button';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({count: prevState.count + 1}))
    }, 1000)
  }

  componentDidUpdate(prevProps,prevState, snapshot) {
    if (prevState.count !== this.state.count) {
      console.log(this.state.count);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    return (
      <>
        <h1 className="m-2">{this.state.count}</h1>
        <Button className="m-2" variant="primary">Start</Button>
        <Button className="m-2" variant="secondary">Stop</Button>
        <Button className="m-2" variant="success">Reset</Button>
      </>
    );
  }
}

export default Timer
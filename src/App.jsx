import React from "react";
import Timer from "./components/Timer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true
    }
  }

  render() {
    return (
      <>
        {
          this.state.status && <Timer></Timer>
        }
        <Button onClick={() => this.setState({status: false})} className="m-2" variant="danger">Unmount Timer</Button>
      </>
    );
  }
}

export default App
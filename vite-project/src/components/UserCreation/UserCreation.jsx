import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserForm from "../UserForm";
import UserList from "../UserList";

class UserCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      urlPhoto: '',
      users: [],
      disabled: true
    }
  }


  checkStatus = () => {
    if (this.state.firstName && this.state.lastName && this.state.age && this.state.urlPhoto) {
      this.setState({
        disabled:  false
      })
    }
  }

  handleChange = (event, fieldName) => {

    const data = {...this.state}

    if(event.target.name === fieldName) {
      data[fieldName] = event.target.value;
    }

    this.setState({
      ...data
    }, () => {
      this.checkStatus();
    })
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const user = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      urlPhoto: this.state.urlPhoto
    };
    this.state.users.push(user);
    this.setState({
      users: [...this.state.users]
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <h1 className="mt-4 mb-3">User Creation Form</h1>
          <Col>
            <UserForm firstName={this.state.firstName} lastName={this.state.lastName}
            age={this.state.age} urlPhoto={this.state.urlPhoto} users={this.state.users}
            onFormChange={this.handleChange} onFormSubmit={this.handleSubmit} disabled={this.state.disabled}></UserForm>
          </Col>
          <Col>
            <UserList users={this.state.users}></UserList>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default UserCreation

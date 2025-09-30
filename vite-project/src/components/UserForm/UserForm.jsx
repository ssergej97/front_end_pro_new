import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

class UserForm extends React.Component {

  render() {

    return (
      <Form>
        <Row className="mb-3">
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>First Name*</Form.Label>
            <Form.Control
              value={this.props.firstName}
              name="firstName"
              onChange={(event) => this.props.onFormChange(event, "firstName")}
              required
              type="text"
              placeholder="Enter your first name"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Last Name*</Form.Label>
            <Form.Control
              value={this.props.lastName}
              onChange={(event) => this.props.onFormChange(event, "lastName")}
              required
              type="text"
              name="lastName"
              placeholder="Enter your last name"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Age*</Form.Label>
            <Form.Control
              value={this.props.age}
              onChange={(event) => this.props.onFormChange(event, "age")}
              required
              type="number"
              name="age"
              placeholder="Enter your age"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group md="4" controlId="validationCustom02">
            <Form.Label>Photo*</Form.Label>
            <Form.Control
              onChange={(event) => this.props.onFormChange(event, "urlPhoto")}
              value={this.props.urlPhoto}
              required
              type="text"
              name="urlPhoto"
              placeholder="Enter your URL photo"
            />
          </Form.Group>
        </Row>
        <Button disabled={this.props.disabled} onClick={(event) => this.props.onFormSubmit(event)} className="mt-3" type="submit">Submit</Button>
      </Form>
    )
  }
}

export default UserForm

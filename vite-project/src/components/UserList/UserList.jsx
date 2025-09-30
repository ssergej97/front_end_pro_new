import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class UserList extends React.Component {

  render() {
    return (
      this.props.users.map((user) => {
        return (
          <Card key={user.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.urlPhoto}/>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>First Name: {user.firstName}</ListGroup.Item>
              <ListGroup.Item>Last Name: {user.lastName}</ListGroup.Item>
              <ListGroup.Item>Age: {user.age}</ListGroup.Item>
            </ListGroup>
          </Card>
        )
      })

    )
  }
}

export default UserList

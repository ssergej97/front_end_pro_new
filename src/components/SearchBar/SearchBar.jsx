import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const SearchBar = () => {

  return (
    <>
      <h2>Search a weather for a city</h2>
      <div >
        <Form className="d-flex justify-content-start align-items-end">
          <Form.Group className="me-3" controlId="exampleForm.ControlInput1">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter a city" />
          </Form.Group>
          <Button variant="primary">Search</Button>
        </Form>
      </div>


    </>
  )
}

export default SearchBar
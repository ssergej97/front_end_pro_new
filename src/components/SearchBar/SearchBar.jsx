import React, { useRef, } from "react";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

const SearchBar = ({setCity}) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputRef.current.value);
  };

  return (
    <>
      <h2>Search a weather for a city</h2>
      <div >
        <Form className="d-flex justify-content-start align-items-end" onSubmit={handleSubmit}>
          <Form.Group className="me-3" controlId="exampleForm.ControlInput1">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter a city" ref={inputRef}/>
          </Form.Group>
          <Button variant="primary" type="submit">Search</Button>
        </Form>
      </div>


    </>
  )
}

export default SearchBar
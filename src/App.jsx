import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FavoritesList from "./components/FavoritesList";
import { Col, Container, Row } from "react-bootstrap";

const App = () => {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="mb-3">Weather Dashboard</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchBar ></SearchBar>
          </Col>
          <Col>
            <WeatherCard></WeatherCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <FavoritesList></FavoritesList>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
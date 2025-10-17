import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FavoritesList from "./components/FavoritesList";
import { Col, Container, Row, } from "react-bootstrap";

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [cityList, setCityList] = useState(null);


  useEffect(() => {
    if (city) {
      fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=uk`)
        .then(res => res.json())
        .then((result) => {
          if (!result.results[0].name) return
          setCity(result.results[0].name)
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${result.results[0].latitude}&longitude=${result.results[0].longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`)
            .then(res => res.json())
            .then(result => setWeather(result))
        })
    }
  }, [city]);

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
            <SearchBar setCity={setCity}></SearchBar>
          </Col>
          <Col>
            <WeatherCard city={city} weatherInfo={weather} setCityList={setCityList}></WeatherCard>
          </Col>
        </Row>
        <Row>
          <Col>
            <FavoritesList cityList={cityList} setCityList={setCityList}></FavoritesList>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App
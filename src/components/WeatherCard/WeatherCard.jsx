import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";

const WeatherCard = ({weatherInfo, city, setCityList, show, handleClose, handleShow}) => {


  const handleClick = () => {
    if (!localStorage.getItem("cities")) {
      const arrayOfCities = [];
      const copyCity = city;
      const cityObj = {id: 1, name: copyCity}
      arrayOfCities.push(cityObj);
      setCityList(arrayOfCities);
      localStorage.setItem("cities", JSON.stringify(arrayOfCities));
      return;
    }

    const arrayOfCities = JSON.parse(localStorage.getItem("cities"));
    const copyCity = city;
    const citiesObj = {id: arrayOfCities.at(-1).id + 1, name: copyCity}
    arrayOfCities.push(citiesObj);
    setCityList(arrayOfCities);
    localStorage.setItem("cities", JSON.stringify(arrayOfCities));
  };

  return (
    <>
      { weatherInfo ? (
        <>
          <h2 className="mb-3">Weather Information</h2>
          <p><span className="fw-bolder">Location:</span> {city}</p>
          <p><span className="fw-bolder">Temperature:</span> {weatherInfo.current_weather.temperature} °C</p>
          <p><span className="fw-bolder">Wind Speed:</span> {weatherInfo.current_weather.windspeed} km/h</p>
          <h3>Further days</h3>
          <div className="d-flex">
            <ul className="list-unstyled me-3">
              <p className="fw-bolder">Date</p>
              {
                weatherInfo.daily.time.map((data) => {
                  return <li>{data}</li>
                })
              }
            </ul>
            <ul className="list-unstyled me-3">
              <p className="fw-bolder">Max</p>
              {
                weatherInfo.daily.temperature_2m_max.map((data) => {
                  return <li>{data} °C</li>
                })
              }
            </ul>
            <ul className="list-unstyled me-3">
              <p className="fw-bolder">Min</p>
              {
                weatherInfo.daily.temperature_2m_min.map((data) => {
                  return <li>{data} °C</li>
                })
              }
            </ul>
          </div>
          <Button variant="dark" type="button" onClick={handleClick}>Add to favourites</Button>
        </>
        ) : (
          <p>Search for a city</p>
        )}
      {
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>You entered a city that does not exist. Please enter a valid city</Modal.Body>
        </Modal>
      }
    </>
  )
}

export default WeatherCard

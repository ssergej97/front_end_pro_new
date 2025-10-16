import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

// Functional component lifecycle
const WeatherCard = () => {

  return (
    <>
      <h2 className="mb-3">Weather Information</h2>
      <p>Location: Kyiv, Ukraine</p>
      <p>Temperature: +9 °C</p>
      <p>Wind: 13 km/h</p>
      <p>Description: Mostly cloudy</p>
      <h3>Further days</h3>
      <ul>
        <li>16.10 `&gt;` 9° 4°</li>
      </ul>
      <Button variant="dark">Add to favourites</Button>
    </>
  )
}

export default WeatherCard
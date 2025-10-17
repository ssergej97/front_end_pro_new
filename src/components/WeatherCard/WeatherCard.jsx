import Button from "react-bootstrap/Button";

const WeatherCard = ({weatherInfo, city}) => {

  const handleClick = () => {
    if (!localStorage.getItem("cities")) {
      const arrayOfCities = [];
      const copyCity = city;
      arrayOfCities.push(copyCity);
      localStorage.setItem("cities", JSON.stringify(arrayOfCities));
    }

    const arrayOfCities = JSON.parse(localStorage.getItem("cities"));
    const copyCity = city;
    arrayOfCities.push(copyCity);
    localStorage.setItem("cities", JSON.stringify(arrayOfCities));

  };

  return (
    <>
      { weatherInfo ? (
        <>
          <h2 className="mb-3">Weather Information</h2>
          <p><span className="fw-bolder">Location:</span> {weatherInfo.timezone}</p>
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
    </>
  )
}

export default WeatherCard
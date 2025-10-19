import { Button, Modal } from "react-bootstrap";
import React from "react";

const WeatherCard = ({weatherInfo, city, setCityList, show, handleClose, handleShow}) => {


  const handleClick = () => {
    if (!localStorage.getItem("cities")) {
      const arrayOfCities = [];
      const copyCity = editedCity();
      const cityObj = {id: 1, name: copyCity}
      arrayOfCities.push(cityObj);
      setCityList(arrayOfCities);
      localStorage.setItem("cities", JSON.stringify(arrayOfCities));
      return;
    }

    const arrayOfCities = JSON.parse(localStorage.getItem("cities"));
    const copyCity = editedCity();
    const citiesObj = {id: `${arrayOfCities.at(-1)?.id ? Number(arrayOfCities.at(-1).id) + 1 : 1}`, name: copyCity}
    arrayOfCities.push(citiesObj);
    setCityList(arrayOfCities);
    localStorage.setItem("cities", JSON.stringify(arrayOfCities));
  };

  const editedCity = () => {
    const translitMap = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e',
      'є': 'ie',
      'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'i',
      'й': 'i',
      'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
      'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
      'ш': 'sh', 'щ': 'shch', 'ь': '',
      'ю': 'iu',
      'я': 'ia',

      'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E',
      'Є': 'Ie', 'Ж': 'Zh', 'З': 'Z', 'И': 'Y', 'І': 'I', 'Ї': 'I', 'Й': 'I',
      'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R',
      'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts', 'Ч': 'Ch',
      'Ш': 'Sh', 'Щ': 'Shch', 'Ь': '',
      'Ю': 'Iu', 'Я': 'Ia',

      "'": ""
    };

    function transliterate(text) {
      let result = text
        .replace(/^[Є]/g, 'Ye')
        .replace(/(\s[Є])/g, ' Ye')
        .replace(/^[Ї]/g, 'Yi')
        .replace(/(\s[Ї])/g, ' Yi')
        .replace(/^[Й]/g, 'Y')
        .replace(/(\s[Й])/g, ' Y')
        .replace(/^[Ю]/g, 'Yu')
        .replace(/(\s[Ю])/g, ' Yu')
        .replace(/^[Я]/g, 'Ya')
        .replace(/(\s[Я])/g, ' Ya');

      result = result
        .replace(/^[є]/g, 'ye')
        .replace(/(\s[є])/g, ' ye')
        .replace(/^[ї]/g, 'yi')
        .replace(/(\s[ї])/g, ' yi')
        .replace(/^[й]/g, 'y')
        .replace(/(\s[й])/g, ' y')
        .replace(/^[ю]/g, 'yu')
        .replace(/(\s[ю])/g, ' yu')
        .replace(/^[я]/g, 'ya')
        .replace(/(\s[я])/g, ' ya');

      return result.replace(/[а-яА-ЯіїєґІЇЄҐ']/g, (match) => {
        return translitMap[match] || match;
      });
    }

    const ukrainianText = city;

    const transliteratedText = transliterate(ukrainianText);

    return transliteratedText;
  }


  return (
    <>
      { weatherInfo ? (
        <>
          <h2 className="mb-3">Weather Information</h2>
          <p><span className="fw-bolder">Location:</span> {weatherInfo ? editedCity() : null}</p>
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

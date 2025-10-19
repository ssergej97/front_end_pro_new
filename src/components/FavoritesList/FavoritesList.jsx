import Button from "react-bootstrap/Button";


const FavoritesList = ({cityList, setCityList, setCity}) => {

  const handleDelete = (event) => {
    const id = event.target.id;
    const arrayOfCities = JSON.parse(localStorage.getItem("cities"));
    const filteredArrayOfCities = arrayOfCities.filter((city) => {
      return +city.id !== +id;
    });
    setCityList(filteredArrayOfCities);
    localStorage.setItem("cities", JSON.stringify(filteredArrayOfCities));
  }

  const handleUpdate = (event) => {
    const city = event.target.dataset.city;
    setCity(city);
  }

  return (
    <>
      <h2 className="mb-3">Favourites</h2>
      <ul className="list-unstyled" onClick={handleDelete}>
      {
        cityList ? (
          cityList.map((city) => {
            return (
                <li key={city.id} style={{cursor: "pointer"}}  className="mb-3"><span onClick={handleUpdate} data-city={city.name} className="me-3">{city.name}</span><Button id={city.id} variant="dark" type="button">Delete</Button></li>
            )
          })

        ) : (
          <p>No favourites cities</p>
        )
      }
      </ul>

    </>
  )
}

export default FavoritesList

import Button from "react-bootstrap/Button";


const FavoritesList = ({cityList, setCityList}) => {

  const handleClick = (event) => {
    console.log(event.target.id);
    const id = event.target.id;
    const arrayOfCities = JSON.parse(localStorage.getItem("cities"));
    console.log(arrayOfCities);
    const filteredArrayOfCities = arrayOfCities.filter((city) => {
      return +city.id !== +id;
    });
    console.log(filteredArrayOfCities);
    setCityList(filteredArrayOfCities);
    localStorage.setItem("cities", JSON.stringify(filteredArrayOfCities));
  }


  return (
    <>
      <h2 className="mb-3">Favourites</h2>
      <ul className="list-unstyled" onClick={handleClick}>
      {
        cityList ? (
          cityList.map((city) => {
            return (
                <li key={city.id} className="mb-3"><span className="me-3">{city.name}</span><Button id={city.id} variant="dark" type="button">Delete</Button></li>
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

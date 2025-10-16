import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const FavoritesList = () => {

  return (
    <>
      <h2 className="mb-3">Favourites</h2>
      <div className="d-flex justify-content-start align-items-center">
        <p className="me-3 mb-0">Kyiv</p>
        <Button variant="dark">Delete</Button>
      </div>
    </>
  )
}

export default FavoritesList
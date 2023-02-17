import React, { useState } from "react";
import CarItem from "../Components/Car/CarItem";
import FindCarForm from "../Components/Car/FindCarForm";
import { Link } from "react-router-dom";
import "./FindObject.css"

function FindCar() {
  const [car, setCar] = useState(null);

  const updateCar = (findedCar) => {
    setCar(findedCar);
  };

  return (
    <div className="finCard">
      <h2>Trouver une voiture</h2>
      <FindCarForm setCar={updateCar} />
      {car && <CarItem car={car} />}
      <Link to="/newcontract">OK voiture</Link>
      <Link to="/newoption">OK Option</Link>
    </div>
  );
}

export default FindCar;

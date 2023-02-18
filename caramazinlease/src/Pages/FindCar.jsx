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
      <div className="d-flex">
        <Link to="/newcontract">
          <button>Ok Car</button>
        </Link>
        <Link to="/newoption">
          <button>Ok Option</button>
        </Link>
      </div>
    </div>
  );
}

export default FindCar;

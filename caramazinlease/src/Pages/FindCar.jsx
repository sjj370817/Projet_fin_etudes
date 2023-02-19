import React, { useState } from "react";
import CarItem from "../Components/Car/CarItem";
import FindCarForm from "../Components/Car/FindCarForm";
import { Link } from "react-router-dom";
import "./FindObject.css"
import Stack from 'react-bootstrap/Stack';

function FindCar() {
  const [car, setCar] = useState(null);

  const updateCar = (findedCar) => {
    setCar(findedCar);
  };

  return (
    <div className="findCard"  style={{minHeight: "1180px"}}>
      <h2>Trouver une voiture</h2>
      <FindCarForm setCar={updateCar} />
      <div className="rt">{car && <CarItem car={car} />}</div>

      <Stack direction="horizontal" gap={4} className="mt-5">
        <div></div>
        <div className=" border ms-auto p-2"><Link to="/newoption"> <span>Ok Car</span></Link></div>
        <div className=" border p-2"><Link to="/newcontract">  <span>Ok Option</span> </Link></div>
        <div className="ms-auto "></div>
      </Stack>
    </div>
  );
}

export default FindCar;

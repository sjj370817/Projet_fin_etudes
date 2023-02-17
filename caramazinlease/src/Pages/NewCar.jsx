import React from "react";
import NewCarForm from "../Components/Car/NewCarForm";
import "./NewObject.css"

function NewCar() {
  return (
    <div className="newCard">
      <h2>Ajouter une nouvelle voiture</h2>
      <NewCarForm />
    </div>
  );
}

export default NewCar;

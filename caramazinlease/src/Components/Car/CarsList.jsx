import React from "react";
import CarItem from "./CarItem";
import styles from "./CarsList.module.css";
import api from "../../api/carlease";

function CarsList(props) {
  const deleteCar = async (id) => {
    try {
      await api.delete("/cars/" + id);
      props.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["cars-container"]}>
      {props.cars.map((car) => {
        return <CarItem car={car} key={car.id} onDelete={deleteCar} />;
      })}
    </div>
  );
}

export default CarsList;
import React, { useContext } from "react";
import styles from "./CarItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faList,
  faHouseMedical,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";

/*
registration;
brand;
color;
fuel;
power;
maxSpeed;
Km;
inUse;
*/

function CarItem(props) {
  const context = useContext(MainContext);
  const updateCar = () => {
    context.setCar(props.car);
    context.setAction("editCar");
  };

  console.log(props.car);

  return (
    <div className={styles.CarItem}>
      <div className="image-container">
        <p>images</p>
        <img src="" alt="" />
      </div>
      <div className={styles["car-info"]}>
        <h3>{props.car.id}</h3>
        <h3>{props.car.registration}</h3>
        <p>{props.car.brand}</p>
        <p>{props.car.color}</p>
        <p>{props.car.fuel}</p>
        <p>{props.car.power}</p>
        <p>{props.car.maxSpeed}</p>
        <p>{props.car.Km}</p>
        <p
          className={
            props.car.inUse ? styles["green-border"] : styles["red-border"]
          }
        >
          {props.car.inUse ? "Disponible" : "Indisponible"}
        </p>
        <p>{props.car.firstUse}</p>
      </div>
      <div className={styles.cta}>
        <div
          className={styles["cta-item"]}
          onClick={() => props.onDelete(props.car.id)}
        >
          <FontAwesomeIcon
            icon={faTrash}
            className={styles["cta-icon"]}
          ></FontAwesomeIcon>
        </div>
        <div className={styles["cta-item"]}>
          <FontAwesomeIcon
            icon={faList}
            className={styles["cta-icon"]}
          ></FontAwesomeIcon>
        </div>
        <div className={styles["cta-item"]}>
          <FontAwesomeIcon
            icon={faHouseMedical}
            className={styles["cta-icon"]}
          ></FontAwesomeIcon>
        </div>
        <div className={styles["cta-item"]} onClick={updateCar}>
          <Link to="/newcar">
            <FontAwesomeIcon
              icon={faFilePen}
              className={styles["cta-icon"]}
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarItem;

import React, { useContext } from "react";
import styles from "../GroupeCss/formList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";

import Card from 'react-bootstrap/Card';

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
    <div>
      <div className='col'>
        <Card className="card">
          <div className={styles["car-info"]}>
            <h3><span>Id:</span> {props.car.id}</h3>
            <h3><span>Matricule:</span> {props.car.registration}</h3>
            <h3><span>Marque:</span> {props.car.brand}</h3>
            <h3><span>Couleur:</span> {props.car.color}</h3>
            <h3><span>Carburant:</span> {props.car.fuel}</h3>
            <h3><span>Puissance:</span> {props.car.power}</h3>
            <h3><span>Vitesse max:</span> {props.car.maxSpeed}</h3>
            <h3><span>Kilomètrage:</span> {props.car.Km}</h3>
            <h3
              className={
                props.car.inUse ? styles["green-border"] : styles["red-border"]
              }
            >
              <span>En service:</span> {props.car.inUse ? "Disponible" : "Indisponible"}
            </h3>
            <h3><span>Mise en service:</span> {props.car.firstUse}</h3>
          </div>
          <div style={{ width: "100%", display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <div
              style={{ cursor: "pointer", marginRight: '20px' }}
              onClick={() => props.onDelete(props.client)}
            >
              <FontAwesomeIcon
                icon={faTrash}
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
        </Card>
      </div>
    </div>
  );
}

export default CarItem;

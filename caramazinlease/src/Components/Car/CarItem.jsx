import React, { useContext } from "react";
import styles from "../GroupeCss/formList.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faList,
  faHouseMedical,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
      <Row className="Item m-auto">
        <Col>
          <Card className="card">
            <div className={styles["car-info"]}>
              <h3>Id: {props.car.id}</h3>
              <h3>Matricule: {props.car.registration}</h3>
              <p>Marque: {props.car.brand}</p>
              <p>Couleur: {props.car.color}</p>
              <p>Carburant: {props.car.fuel}</p>
              <p>Puissance: {props.car.power}</p>
              <p>Vitesse max: {props.car.maxSpeed}</p>
              <p>Kilomètrage: {props.car.Km}</p>
              <p
                className={
                  props.car.inUse ? styles["green-border"] : styles["red-border"]
                }
              >
                En service: {props.car.inUse ? "Disponible" : "Indisponible"}
              </p>
              <p>Mise en service: {props.car.firstUse}</p>
            </div>
            <div style={{width:"100%", display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
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
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CarItem;

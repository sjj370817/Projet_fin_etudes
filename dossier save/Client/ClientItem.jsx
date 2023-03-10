import React, {useContext} from "react";
import styles from "./ClientItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faList,
  faHouseMedical,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";

function ClientItem(props) {
  const context = useContext(MainContext);
  const updateClient = () => {
    context.setClient(props.Client);
    context.setAction("editClient");
  };
  return (
    <div className={styles["client-item-container"]}>
      <div className={styles.CarItem}>
        <div className={styles["car-info"]}>
          <h3>{props.client.id}</h3>
          <p>{props.client.fname}</p>
          <p>{props.client.lname}</p>
          <p>{props.client.dob}</p>
          <p>{props.client.fidelity}</p>
          <p>{props.client.address}</p>
        </div>
        <div className={styles.cta}>
        <div
          className={styles["cta-item"]}
          onClick={() => props.onDelete(props.client.id)}
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
        <div className={styles["cta-item"]} onClick={updateClient}>
          <Link to="/newcar">
            <FontAwesomeIcon
              icon={faFilePen}
              className={styles["cta-icon"]}
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ClientItem;

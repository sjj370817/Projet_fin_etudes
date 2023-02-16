import React, {useContext} from "react";
import styles from "./ClientRow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen, faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";

function ClientRow(props) {
  const context = useContext(MainContext);
  const updateClient = () => {
    context.setClient(props.Client);
    context.setAction("editClient");
  };
  return (
      <tr className={styles.tr}>
        <td>{props.client.fname}</td>
        <td>{props.client.lname}</td>
        <td>{props.client.address}</td>
        <td>{props.client.dob}</td>
        <td>{props.client.fidelity}</td>
        <td onClick={() => props.onDelete(props.client)}>
          <FontAwesomeIcon
            icon={faTrash}
            className={styles["cta-icon"]}
          ></FontAwesomeIcon>
        </td>
        <td className={styles["cta-item"]} onClick={updateClient}>
          <Link to="/newclient">
            <FontAwesomeIcon
              icon={faFilePen}
              className={styles["cta-icon"]}
            ></FontAwesomeIcon>
          </Link>
        </td>
        <td>
          <FontAwesomeIcon
            icon={faList}
            className={styles["cta-icon"]}
          ></FontAwesomeIcon>
        </td>
      </tr>
  );
}

export default ClientRow;

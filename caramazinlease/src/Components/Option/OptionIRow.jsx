import React, { useContext } from "react";
import styles from "./OptionStyle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";

function OptionRow(props) {
  const context = useContext(MainContext);
  const updateOption = () => {
    context.setOption(props.option);
    context.setAction("editOption");
  };


  return (
    <tr className={styles.tr}>
      <td>{props.option.id}</td>
      <td>{props.option.name}</td>
      <td>{props.option.description}</td>
      {/* <td>{props.option.idCar}</td> */}
      <td style={{ cursor: "pointer" }} onClick={() => props.onDelete(props.option)}>
        <FontAwesomeIcon
          icon={faTrash}
          className={styles["cta-icon"]}
        ></FontAwesomeIcon>
      </td>
      <td style={{ cursor: "pointer" }} onClick={updateOption}>
        <Link to="/newoption">
          <FontAwesomeIcon
            icon={faFilePen}
            className={styles["cta-icon"]}
          ></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  );
}

export default OptionRow
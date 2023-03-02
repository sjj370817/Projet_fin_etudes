import React, { useContext } from "react";
import styles from "./OptionStyle.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";
import Card from 'react-bootstrap/Card';

function OptionRow(props) {
  const context = useContext(MainContext);
  const updateOption = () => {
    context.setOption(props.option);
    context.setAction("editOption");
  };


  return (
    <Card className="card">
      <tr className={styles.tr}>
        <td style={{ width: '5%', textAlign: 'center' }}>{props.option.id}</td>
        <td style={{ width: '35%', textAlign: 'center' }}>{props.option.name}</td>
        <td style={{ width: '10%', textAlign: 'center' }}>{props.option.description}</td>
        {/* <td>{props.option.idCar}</td> */}
      </tr>
      <tr style={{marginTop:"5%"}}>
        <td style={{ cursor: "pointer", width: '5%', textAlign: 'center' }} onClick={() => props.onDelete(props.option)}>
          <FontAwesomeIcon
            icon={faTrash}
            className={styles["cta-icon"]}
          ></FontAwesomeIcon>
        </td>
        <td style={{ cursor: "pointer", width: '5%', textAlign: 'center' }} onClick={updateOption}>
          <Link to="/newoption">
            <FontAwesomeIcon
              icon={faFilePen}
              className={styles["cta-icon"]}
            ></FontAwesomeIcon>
          </Link>
        </td>
      </tr>
    </Card>
  );
}

export default OptionRow
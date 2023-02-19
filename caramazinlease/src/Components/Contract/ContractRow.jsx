import React, { useContext } from "react";
import styles from "../GroupeCss/formSave.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";

function ContractRow(props) {
  const context = useContext(MainContext);
  const updateContract = () => {
    context.setContract(props.contract);
    context.setAction("editContract");
  };

  return (
    <tr className={styles.tr}>
      <td>{props.contract.id}</td>
      <td>{props.contract.date}</td>
      <td>{props.contract.start}</td>
      <td>{props.contract.end}</td>
      <td>{props.contract.totalPrice}</td>
      <td>{props.contract.advance}</td>
      <td>{props.contract.leftToPay}</td>
      <td>{props.contract.placeOfReturn}</td>
      {/* <td>{props.contract.car}</td>
      <td>{props.contract.client}</td> */}
      <td style={{cursor: "pointer"}} onClick={() => props.onDelete(props.contract)}>
        <FontAwesomeIcon
          icon={faTrash}
          className={styles["cta-icon"]}
        ></FontAwesomeIcon>
      </td>
      <td className={styles["cta-item"]} onClick={updateContract}>
        <Link to="/newcontract">
          <FontAwesomeIcon
            icon={faFilePen}
            className={styles["cta-icon"]}
          ></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  );
}

export default ContractRow;

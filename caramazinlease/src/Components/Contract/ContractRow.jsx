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
    <tr style={{}}>
      <td style={{width: '5%', textAlign: 'center'}}>{props.contract.id}</td>
      <td style={{width: '10%', textAlign: 'center'}}>{props.contract.date}</td>
      <td style={{width: '10%', textAlign: 'center'}}>{props.contract.start}</td>
      <td style={{width: '10%', textAlign: 'center'}}>{props.contract.end}</td>
      <td style={{width: '5%', textAlign: 'center'}}>{props.contract.totalPrice}</td>
      <td style={{width: '5%', textAlign: 'center'}}>{props.contract.advance}</td>
      <td style={{width: '5%', textAlign: 'center'}}>{props.contract.leftToPay}</td>
      <td style={{width: '10%', textAlign: 'center'}}>{props.contract.placeOfReturn}</td>
      {/* <td>{props.contract.car}</td>
      <td>{props.contract.client}</td> */}
      <td style={{cursor: "pointer", width: '3%', textAlign: 'center'}} onClick={() => props.onDelete(props.contract)}>
        <FontAwesomeIcon
          icon={faTrash}
          className={styles["cta-icon"]}
        ></FontAwesomeIcon>
      </td>
      <td className={styles["cta-item"]} onClick={updateContract} style={{width: '3%', textAlign: 'center'}}>
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

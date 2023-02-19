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

function InvoiceItem(props) {
  const context = useContext(MainContext);
  const updateInvoice = () => {
    context.setInvoice(props.invoice);
    context.setAction("editInvoice");
  };

  console.log(props.invoice);

  return (
    <div>
      <div div className='col'>
        <Card className="card">
          <div className={styles["car-info"]}>
            <div><h3> <span>idFacture:</span>  {props.invoice.id}</h3></div>
            <div>
              <h3><span>Date:</span> {props.invoice.date}</h3>
              <h3><span>Montant:</span> {props.invoice.amount}</h3>
            </div>
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
            <div className={styles["cta-item"]} onClick={updateInvoice}>
              <Link to="/newinvoice">
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

export default InvoiceItem
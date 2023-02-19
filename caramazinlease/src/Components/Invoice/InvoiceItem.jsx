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

function InvoiceItem(props) {
  const context = useContext(MainContext);
  const updateInvoice = () => {
    context.setInvoice(props.invoice);
    context.setAction("editInvoice");
  };

  console.log(props.invoice);

  return (
    <div className={styles.CarItem}>
      <Row className="Item m-auto">
        <Col>
          <Card className="card">

            <div className="image-container">
              <p>images</p>
              <img src="" alt="" />
            </div>
            <div className={styles["car-info"]}>
              <div><h3>{props.invoice.id}</h3></div>
              <div>
                <h3>{props.invoice.date}</h3>
                <h3>{props.invoice.amount}</h3>
              </div>
            </div>
            <div className={styles.cta}>
              <div
                className={styles["cta-item"]}
                onClick={() => props.onDelete(props.invoice.id)}
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
        </Col>
      </Row>
    </div>
  );
}

export default InvoiceItem
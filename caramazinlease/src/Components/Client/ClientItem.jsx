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

function ClientItem(props) {
    const context = useContext(MainContext);
    const updateClient = () => {
        context.setClient(props.client);
        context.setAction("editClient");
    };

    console.log(props.client);

    return (
        <div className={styles.CarItem}>
            <Row className="Item m-auto">
                <Col>
                    <Card className="card">
                        <div className={styles["car-info"]}>
                            <h3>{props.client.id}</h3>
                            <p>{props.client.fname}</p>
                            <p>{props.client.lname}</p>
                            <p>{props.client.dob}</p>
                            <p>{props.client.fidelity}</p>
                            <p>{props.client.address}</p>
                        </div>
                        <div className="cta">
                            <div
                                className={styles["cta-item"]}
                                onClick={() => props.onDelete(props.client)}
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
                                <Link to="/newclient">
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
    )
}

export default ClientItem
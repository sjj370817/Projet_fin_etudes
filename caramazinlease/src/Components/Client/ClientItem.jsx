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

function ClientItem(props) {
    const context = useContext(MainContext);
    const updateClient = () => {
        context.setClient(props.client);
        context.setAction("editClient");
    };

    console.log(props.client);

    return (
        <div>
            <div div className='col'>
                <Card className="card">
                    <div className={styles["car-info"]}>
                        <h3><span>IdClient:</span> {props.client.id}</h3>
                        <h3><span>Nom:</span> {props.client.fname}</h3>
                        <h3><span>Prenom:</span> {props.client.lname}</h3>
                        <h3><span>Date de naissance:</span> {props.client.dob}</h3>
                        <h3><span>Fidélité:</span> {props.client.fidelity}</h3>
                        <h3><span>Adresse:</span> {props.client.address}</h3>
                    </div>
                    <div style={{ width: "100%", display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                        <div
                            style={{ cursor: "pointer", marginRight:'20px' }}
                            onClick={() => props.onDelete(props.client)}
                        >
                            <FontAwesomeIcon
                                icon={faTrash}
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
            </div>
        </div>
    )
}

export default ClientItem
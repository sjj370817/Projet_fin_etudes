import React, { useContext } from "react";
import styles from "../GroupeCss/formSave.css"
import api from "../../api/carlease";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../../store/Main";

function NewClientForm() {
    let navigate = useNavigate();
    const context = useContext(MainContext);
    const client = context.client;
    console.log(client);
    const fnameInputRef = useRef("");
    const lnameInputRef = useRef("");
    const addressInputRef = useRef("");
    const dobInputRef = useRef("");
    const fidelityInputRef = useRef("");


    const submitHandler = async (el) => {
        el.preventDefault();
        const fnameValue = fnameInputRef.current.value;
        const lnameValue = lnameInputRef.current.value;
        const addressValue = addressInputRef.current.value;
        const dobValue = dobInputRef.current.value;
        const fidelityValue = fidelityInputRef.current.value;

        const newClient = {
            fname: fnameValue,
            lname: lnameValue,
            address: addressValue,
            dob: dobValue,
            fidelity: fidelityValue,
        };

        try {
            let response;
            if (context.action === "editClient") {
                response = await api.put("/clients/" + client.id, newClient);
                context.setAction("");
                context.setClient(null);
            } else {
                response = await api.post("/clients/", newClient);
            }
            navigate("/clients");
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles["form-container"]}>
            <form className="car-form" onSubmit={submitHandler}>
                <div className={styles["input-group"]}>
                    <label htmlFor="fname">Nom</label>
                    <input
                        type="text"
                        name="fname"
                        id="fname"
                        defaultValue={context.action === "editClient" ? client.fname : ""}
                        required
                        ref={fnameInputRef}
                    />
                </div>

                <div className={styles["input-group"]}>
                    <label htmlFor="lname">Prenom</label>
                    <input
                        type="text"
                        name="lname"
                        id="lname"
                        defaultValue={context.action === "editClient" ? client.lname : ""}
                        required
                        ref={lnameInputRef}
                    />
                </div>

                <div className={styles["input-group"]}>
                    <label htmlFor="address">Adresse</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        defaultValue={context.action === "editClient" ? client.address : ""}
                        required
                        ref={addressInputRef}
                    />
                </div>
                <div className={styles["input-group"]}>
                    <label htmlFor="dob">Date de naissance</label>
                    <input type="date" name="dob" id="dob"
                        defaultValue={client ? client.date : "mm/dd/yyyy"}
                        required ref={dobInputRef} />
                </div>

                <div className={styles["input-group"]}>
                    <label htmlFor="fidelity">Fidélité</label>
                    <input
                        type="number"
                        name="fidelity"
                        id="fidelity"
                        placeholder="0"
                        step="2"
                        defaultValue={context.action === "editClient" ? client.fidelity : "0"}
                        min="0"
                        required
                        ref={fidelityInputRef}
                    />
                </div>
                <div className="input-submit">
                    <input
                        type="submit"
                        name="submit-btn"
                        id="submit"
                        value="Enregistrer"
                    />
                </div>
            </form>
        </div>
    );
}


export default NewClientForm
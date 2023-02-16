import React, { useRef, useContext } from "react";
import api from "../../api/carlease";
import styles from "./FindClientForm.module.css";
import MainContext from "../../store/Main";


function FindClientForm(props) {
    const context = useContext(MainContext);
    const idInputRef = useRef("");
    const submitHandler = async (a) => {
        a.preventDefault();
        const idValue = idInputRef.current.value;

        try {
            const response = await api.get("/clients/" + idValue);
            if (response.data) {
                props.setClient(response.data);
                context.setClient(response.data);
            }
        } catch (error) {
            props.setClient(null);
            context.setClient(null);
        }
    };

    return (
        <div className={styles["form-container"]}>
            <form onSubmit={submitHandler}>
                <div className={styles["input-group"]}>
                    <label htmlFor="id">id</label>
                    <input type="text" name="id" id="id" required ref={idInputRef} />
                </div>

                <div className={styles["submit-container"]}>
                    <input
                        type="submit"
                        name="submit-btn"
                        id="submit-btn"
                        value="Chercher"
                    />
                </div>
            </form>
        </div>
    )
}

export default FindClientForm
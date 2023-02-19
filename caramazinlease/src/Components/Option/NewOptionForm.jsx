import React, { useContext } from "react";
import styles from "./OptionStyle.css"
import api from "../../api/carlease";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../../store/Main";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";


function NewOptionForm() {
    let navigate = useNavigate();
    const context = useContext(MainContext);
    const option = context.option;
    console.log(option);

    const nameInputRef = useRef("");
    const descriptionInputRef = useRef("");
    const car2InputRef = useRef("");

    const submitHandler = async (e) => {
        e.preventDefault();

        const nameValue = nameInputRef.current.value;
        const descriptionValue = descriptionInputRef.current.value;
        const car2Value = car2InputRef.current.value;

        const newOption = {
            name: nameValue,
            description: descriptionValue,
            idCar: {id: car2Value }
        };

        try {
            if (context.action === "editOption") {
                await api.put("/options/" + option.id, newOption);
                context.setAction("");
                context.setOption(null);
            } else {
                await api.post("/options/", newOption);
            }
            navigate("/options");
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div className={styles["form-container"]}>
            <form onSubmit={submitHandler}>
                <div className={styles["input-group"]}>
                    <label htmlFor="car">Voiture</label>
                    <input
                        type="text"
                        name="car"
                        id="car"
                        required
                        ref={car2InputRef}
                        value={context.car ? context.car.id : ""}
                    />
                    <div style={{ textAlign: "center", padding: "10px" }}>
                        <Link to="/findcar" className={styles["cta-item"]}>
                            <FontAwesomeIcon
                                icon={faFilePen}
                                className={styles["cta-icon"]}
                            ></FontAwesomeIcon>
                        </Link>
                    </div>
                </div>

                <div className={styles["input-group"]}>
                    <label htmlFor="fname">Nom</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        Value={context.action === "editOption" ? option.name : ""}
                        required
                        ref={nameInputRef}
                    />
                </div>

                <div className={styles["input-group"]}>
                    <label htmlFor="lname">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        Value={context.action === "editOption" ? option.description : ""}
                        required
                        ref={descriptionInputRef}
                    />
                </div>
                <div className="input-submit">
                    <input
                        type="submit"
                        name="submit-btn"
                        id="submit-btn"
                        value="Enregistrer"
                    />
                </div>
            </form>
        </div>
    );
}

export default NewOptionForm
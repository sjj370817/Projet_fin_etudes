import React, { useContext } from "react";
import styles from "./OptionStyle.css"
import api from "../../api/carlease";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import MainContext from "../../store/Main";
import { Link } from "react-router-dom";


function NewOptionForm() {
    let navigate = useNavigate();
    const context = useContext(MainContext);
    const option = context.option;
    console.log(option);

    const nameInputRef = useRef("");
    const descriptionInputRef = useRef("");
    const carInputRef = useRef("");

    const submitHandler = async (e) => {
        e.preventDefault();

        const nameValue = nameInputRef.current.value;
        const descriptionValue = descriptionInputRef.current.value;
        const carValue = carInputRef.current.value;

        const newOption = {
            name: nameValue,
            description: descriptionValue,
            idCar: carValue,
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
                        ref={carInputRef}
                        Defaultvalue={context.car ? context.car.id : ""}
                    />
                    <Link to="/findcar">trouver voiture</Link>
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
                <div className={styles["submit-container"]}>
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
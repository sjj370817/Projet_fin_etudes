import React, { useRef, useContext } from "react";
import api from "../../api/carlease";
import MainContext from "../../store/Main";
import styles from "../GroupeCss/formSave.css"


function FindCarForm(props) {
  const context = useContext(MainContext);
  const idInputRef = useRef("");

  const submitHandler = async (event) => {
    event.preventDefault();

    const idValue = idInputRef.current.value;

    try {
      const response = await api.get("/cars/" + idValue);
      if (response.data) {
        props.setCar(response.data);
        context.setCar(response.data);
      }
    } catch (error) {
      props.setCar(null);
      context.setCar(null);
    }
  };
  return (
    <div className={styles["form-container"]}>
      <form className="car-form" onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <label htmlFor="id">id</label>
          <input type="text" name="id" id="id" required ref={idInputRef} />
        </div>

        <div className="input-submit">
          <input
            type="submit"
            name="submit-btn"
            id="submit-btn"
            value="Chercher"
          />
        </div>
      </form>
    </div>
  );
}

export default FindCarForm;

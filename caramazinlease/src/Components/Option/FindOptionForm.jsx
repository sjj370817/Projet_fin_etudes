import React, { useRef, useContext } from "react";
import api from "../../api/carlease";
import styles from "./OptionStyle.css"
import MainContext from "../../store/Main";

function FindOptionForm(props) {
  const context = useContext(MainContext);
  const idInputRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const idValue = idInputRef.current.value;

    try {
      console.log(idValue);
      const response = await api.get("/options/" + idValue);
      if (response.data) {
        props.setOption(response.data);
        context.setOption(response.data);
        console.log(response.data);
      }
    } catch (error) {
      props.setOption(null);
      context.setOption(null);
      console.log(error);
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

  );

}

export default FindOptionForm;

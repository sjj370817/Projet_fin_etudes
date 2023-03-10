import React, { useRef, useContext } from "react";
import styles from "../GroupeCss/formSave.css"
import api from "../../api/carlease";
import MainContext from "../../store/Main";

function FindContractForm (props){
    const context = useContext(MainContext);
    const idInputRef = useRef("");

    const submitHandler = async (e) => {
        e.preventDefault();
        const idValue = idInputRef.current.value;
    
        try {
          console.log(idValue);
          const response = await api.get("/contracts/" + idValue);
          if (response.data) {
            props.setContract(response.data);
            context.setContract(response.data);
          }
        } catch (error) {
            props.setContract(null);
            context.setContract(null);
            console.log(error);
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

export default FindContractForm;
import React, {useContext} from "react";
import styles from "./NewClientForm.module.css";
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
      if (context.action === "editClient") {
        await api.put("/clients/" + client.id, newClient);
        context.setAction("");
        context.setClient(null);
      } else {
        await api.post("/Clients/", newClient);
        navigate("/clients");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={styles["form-container"]}>
      <form onSubmit={submitHandler}>
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
            defaultValue={context.action === "editClient" ? client.date : "2023-08-02"}
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
            defaultValue={client ? client.fidelity : "0"}
            min="0"
            required
            ref={fidelityInputRef}
          />
        </div>

        <div className={styles["input-group"]}>
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

export default NewClientForm;

import React, { useState } from "react";
import styles from "./NewContractForm.module.css";
import { useRef, useContext } from "react";
import api from "../../api/carlease";
import { Link } from "react-router-dom";
import MainContext from "../../store/Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

/*
date;
startLease;
endLease;
totalPrice;
advance;
leftToPay;
placeOfReturn;
car;
invoice;
client;
*/

function NewContractForm() {
  const navigate = useNavigate();
  const context = useContext(MainContext);
  const contract = context.contract;
  const [dateError, setDateError] = useState(false);
  const [amountError, setAmountError] = useState(false);

  const dateInputRef = useRef("");
  const startInputRef = useRef("");
  const endInputRef = useRef("");
  const totalPriceInputRef = useRef("");
  const advanceInputRef = useRef("");
  const leftToPayInputRef = useRef("");
  const placeOfReturnInputRef = useRef("");
  const carInputRef = useRef("");
  const clientInputRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const dateValue = dateInputRef.current.value;
    const startValue = startInputRef.current.value;
    const endValue = endInputRef.current.value;
    const totalPriceValue = totalPriceInputRef.current.value;
    const advanceValue = advanceInputRef.current.value;
    const leftToPayValue = leftToPayInputRef.current.value;
    const placeOfReturnValue = placeOfReturnInputRef.current.value;
    const carValue = carInputRef.current.value;
    const clientvalue = clientInputRef.current.value;

    if (
      startValue > endValue ||
      endValue < dateValue ||
      startValue < dateValue
    ) {
      setDateError(true);
      return;
    } else {
      setDateError(false);
    }

    AmountValidation(totalPriceValue, leftToPayValue, advanceValue);

    const newContract = {
      date: dateValue,
      start: startValue,
      end: endValue,
      totalPrice: totalPriceValue,
      advance: advanceValue,
      leftToPay: leftToPayValue,
      placeOfReturn: placeOfReturnValue,
      car: { id: carValue },
      client: { id: clientvalue },
    };

    try {
      let response;
      if (context.action === "editContract") {
        response = await api.put("/contracts/" + contract.id, newContract);
        context.setAction("");
        context.setContract(null);
      } else {
        response = await api.post("/contracts/", newContract);
      }
      navigate("/contracts/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const AmountValidation = (totalPriceValue, leftToPayValue, advanceValue) => {
    if (
      Number(totalPriceValue) !==
      Number(advanceValue) + Number(leftToPayValue)
    ) {
      setAmountError(true);
      console.log(amountError);
      return;
    } else {
      setAmountError(false);
    }
  };

  return (
    <div className={styles["form-container"]}>
      <form className={styles["car-form"]} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <label htmlFor="car">Voiture</label>
          <input
            type="text"
            name="car"
            id="car"
            required
            ref={carInputRef}
            value={context.car ? context.car.id : ""}
          />
          <Link to="/findcar">trouver voiture</Link>
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="client">Client</label>
          <input
            type="text"
            name="client"
            id="client"
            required
            value={context.client ? context.client.id : ""}
            ref={clientInputRef}
          />
          <input
            type="text"
            name="client-info"
            id="client-info"
            required
            value={
              context.client
                ? context.client.fname + " " + context.client.lname
                : ""
            }
          />
          <input
            type="text"
            name="client-dob"
            id="client-dob"
            required
            value={context.client ? context.client.dob : ""}
          />
          <div className={styles.cta}>
            <Link to="/findclient" className={styles["cta-item"]}>
              <FontAwesomeIcon
                icon={faFilePen}
                className={styles["cta-icon"]}
              ></FontAwesomeIcon>
            </Link>
          </div>
        </div>


        <div className={styles["input-group"]}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            defaultValue={context.action === "editContract" ? contract.date : "mm/dd/yyyy"}
            required
            ref={dateInputRef}
            className={dateError ? styles["red-border"] : ""}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="start">Début</label>
          <input
            type="date"
            name="start"
            id="start"
            defaultValue={context.action === "editContract" ? contract.start : "mm/dd/yyyy"}
            required
            ref={startInputRef}
            className={dateError ? styles["red-border"] : ""}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="end">Fin</label>
          <input
            type="date"
            name="end"
            id="end"
            defaultValue={context.action === "editContract" ? contract.end :"mm/dd/yyyy"}
            required
            ref={endInputRef}
            className={dateError ? styles["red-border"] : ""}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="totalPrice">Montant total</label>
          <input
            type="number"
            name="totalPrice"
            id="totalPrice"
            defaultValue={context.action === "editContract" ? contract.totalPrice : "0.0"}
            placeholder="0.0"
            step="10"
            min="0"
            required
            ref={totalPriceInputRef}
            className={amountError ? styles["red-border"] : ""}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="advance">Avance</label>
          <input
            type="number"
            name="advance"
            id="advance"
            defaultValue={context.action === "editContract" ? contract.advance : "0.0"}
            placeholder="0.0"
            step="10"
            min="0"
            required
            ref={advanceInputRef}
            className={amountError ? styles["red-border"] : ""}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="leftToPay">Reste à payer</label>
          <input
            type="number"
            name="leftToPay"
            id="leftToPay"
            defaultValue={context.action ==="editContract"? contract.leftToPay :"0.0"}
            placeholder="0.0"
            step="10"
            min="0"
            required
            ref={leftToPayInputRef}
            className={amountError ? styles["red-border"] : ""}
          />
        </div>

        <div className={styles["input-group"]}>
          <label htmlFor="placeOfReturn">Lieu de restitution</label>
          <input
            type="text"
            name="placeOfReturn"
            id="placeOfReturn"
            defaultValue={context.action === "editContract" ? contract.placeOfReturn : ""}
            required
            ref={placeOfReturnInputRef}
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

export default NewContractForm;

import React, { useContext } from "react";
import styles from "./NewInvoiceForm.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/carlease";
import MainContext from "../../store/Main";
import { Link } from "react-router-dom";

function NewInvoiceForm() {
    let navigate = useNavigate();
    const context = useContext(MainContext);
    const invoice = context.invoice;
    console.log(invoice);

    const dateInputRef = useRef();
    const amountInputRef = useRef();
    const contractInputRef = useRef();

    const submitHandle = async (e) => {
        e.preventDefault();

        const dateValue = dateInputRef.current.value;
        const amountValue = amountInputRef.current.value;
        const contractValue = contractInputRef.current.value;

        const newInvoice = {
            date: dateValue,
            amount: amountValue,
            idContract: contractValue,
        };

        try {
            let response;
            if (context.action === "editInvoice") {
                response = await api.put("/invoices/" + invoice.id, newInvoice);
                context.setAction("");
                context.setInvoice(null);
            } else {
                response = await api.post("/invoices/", newInvoice);
                navigate("/invoices");
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form className={styles["car-form"]} onSubmit={submitHandle}>                
            <div>
                    <label htmlFor="idContract">IdContrat</label>
                    <input
                        type="text"
                        name="idContract"
                        id="idContract"
                        Value={context.action === "editInvoice" ? invoice.idContract : ""}
                        required
                        ref={contractInputRef}
                        value={context.contract ? context.contract.id : ""}

                    />
                    <Link to="/findcontract">trouver un Contrat</Link>

                </div>

                <div>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        defaultValue={context.action === "editInvoice" ? invoice.date : "2020-08-09"}
                        required
                        ref={dateInputRef}
                    />
                </div>
                <div>
                    <label htmlFor="amount">amount</label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        defaultValue={context.action === "editInvoice" ? invoice.amount : "0.0"}
                        required
                        ref={amountInputRef}
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
    )
}

export default NewInvoiceForm
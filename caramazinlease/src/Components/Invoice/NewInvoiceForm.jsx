import React, { useContext } from "react";
import styles from "../GroupeCss/formSave.css"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/carlease";
import MainContext from "../../store/Main";


function NewInvoiceForm() {
    let navigate = useNavigate();
    const context = useContext(MainContext);
    const invoice = context.invoice;
    console.log(invoice);

    const dateInputRef = useRef();
    const amountInputRef = useRef();

    const submitHandle = async (b) => {
        b.preventDefault();

        const dateValue = dateInputRef.current.value;
        const amountValue = amountInputRef.current.value;

        const newInvoice = {
            date: dateValue,
            amount: amountValue,
        };

        try {
            let response;
            if (context.action === "editInvoice") {
                response = await api.put("/invoices/" + invoice.id, newInvoice);
                context.setAction("");
                context.setInvoice(null);
            } else {
                response = await api.post("/invoices/", newInvoice);
                console.log(response);
            }
            navigate("/invoices");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form className={styles["car-form"]} onSubmit={submitHandle}>
                <div>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        defaultValue={context.action === "editInvoice" ? invoice.date : "mm/dd/yyyy"}
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
    )
}

export default NewInvoiceForm
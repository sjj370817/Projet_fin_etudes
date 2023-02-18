import React, { useState } from "react";
import InvoiceItem from "../Components/Invoice/InvoiceItem";
import FindInvoiceForm from "../Components/Invoice/FindInvoiceForm";
import { Link } from "react-router-dom";
import "./FindObject.css"

function FindInvoice() {
    const [invoice, setInvoice] = useState(null);

    const updateInvoice = (findedInvoice) => {
        setInvoice(findedInvoice);
    }; 

  return (
     <div className="finCard">
      <h2>Trouver une facture</h2>
      <FindInvoiceForm setInvoice={updateInvoice} />
      {invoice && <InvoiceItem invoice={invoice} />}
      <Link to="/invoices">
      <button>Toutes les factures</button></Link>
    </div>
  );
}

export default FindInvoice
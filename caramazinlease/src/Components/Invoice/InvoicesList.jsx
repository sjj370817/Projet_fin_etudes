import React from 'react'
import styles from "../GroupeCss/formSave.css"
import InvoiceItem from "./InvoiceItem";
import api from "../../api/carlease";

function InvoicesList(props) {
  const deleteInvoice = async (id) =>{
      try {
        await api.delete("/invoices/" + id);
        props.refresh();
      }catch (error){
        console.log(error);
      }
  };
  return (
    <div className={styles["cars-container"]}>
      {props.invoices.map((invoice) => {
        return <InvoiceItem invoice={invoice} key={invoice.id} onDelete={deleteInvoice} />;
      })}
    </div>
  );
}

export default InvoicesList
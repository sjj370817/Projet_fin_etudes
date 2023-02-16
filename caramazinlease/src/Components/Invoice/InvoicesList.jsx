import React from 'react'
import InvoiceItem from "./InvoiceItem";
import styles from "./InvoicesList.module.css";
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
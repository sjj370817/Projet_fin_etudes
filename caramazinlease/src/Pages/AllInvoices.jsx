import React from "react";
import InvoicesList from "../Components/Invoice/InvoicesList";
import { useState, useEffect } from "react";
import api from "../api/carlease";
import "./AllObject.css"

function AllInvoices() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
      fetchInvoices();
    }, []);
  
    const fetchInvoices = async () => {
      try {
        const response = await api.get("/invoices/");
        setInvoices(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="container allCard" style={{color:"#04024b"}}>
        <h2>Toutes les factures</h2>
        <InvoicesList invoices={invoices} refresh={fetchInvoices} />
      </div>
    );
}

export default AllInvoices
import React from 'react'
import NewInvoiceForm from '../Components/Invoice/NewInvoiceForm'
import "./NewObject.css"

function NewInvoice() {
  return (
    <div className="newCard" style={{color:"#04024b"}} > 
    <h2>Ajouter une nouvelle facture </h2> 
    <NewInvoiceForm />
    </div>
  )
}

export default NewInvoice
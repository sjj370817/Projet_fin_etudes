import React from "react";
import NewClientForm from "../Components/Client/NewClientForm";
import "./NewObject.css"

function NewClient() {
  return (
    <div className="newCard" style={{color:"#04024b"}}  >
      <h2>Ajouter un nouveau client</h2>
      <NewClientForm />
    </div>
  );
}

export default NewClient;

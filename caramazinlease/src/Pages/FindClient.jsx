import React, { useState } from "react";
import ClientItem from "../Components/Client/ClientItem";
import FindClientForm from "../Components/Client/FindClientForm";
import { Link } from "react-router-dom";
import "./FindObject.css"

function FindClient() {
  const [client, setClient] = useState(null);

  const updateClient = (findedClient) => {
    setClient(findedClient);
  };

  return (
    <div className="findCard" style={{color:"#04024b"}}  >
      <h2>Trouver un client</h2>
      <FindClientForm setClient={updateClient} />
      {client && <ClientItem client={client} />}
      <Link to="/newcontract">
      <div className="findButton"><button>Ok Car</button></div>
      </Link>
    </div>
  );
}

export default FindClient;

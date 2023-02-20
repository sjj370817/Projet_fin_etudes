import React, { useEffect, useState } from "react";
import ClientsList from "../Components/Client/ClientsList";
import api from "../api/carlease";
import "./AllObject.css"

function AllClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await api.get("/clients/");
      setClients(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container allCard">
      <h2>Tous les clients</h2>
      <ClientsList clients={clients} refresh={fetchClients} />
    </div>
  );
}

export default AllClients;

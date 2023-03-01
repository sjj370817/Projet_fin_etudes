import React, { useEffect, useState } from 'react'
import api from "../api/carlease";
import ContractsTable from "../Components/Contract/ContractsTable"
import "./AllObject.css"

function AllContracts() {
  const [contracts, setContracts]= useState([]);

  useEffect(()=> {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const response = await api.get("/contracts/");
      setContracts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container allCard'style={{color:"#04024b"}} >
      <h2> Toutes les contrats</h2>
      <ContractsTable contracts={contracts} refresh={fetchContracts} />
    </div>
  );
}

export default AllContracts
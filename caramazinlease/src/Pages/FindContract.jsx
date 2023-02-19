import React, { useState } from "react";
import ContractRow from "../Components/Contract/ContractRow";
import FindContractForm from "../Components/Contract/FindContractForm";
import { Link } from "react-router-dom";
import "./FindObject.css"

function FindContract() {
  const [contract, setContract] = useState(null);

  const updateContract = (findedContract) => {
    setContract(findedContract);
  };

  return (
    <div className="container findCard">
      <h2>Trouver un contract</h2>
      <FindContractForm setContract={updateContract} />
      {contract && <ContractRow contract={contract} />}
      <Link to="/newinvoice">
      <div className="findButton"><button>Toutes les factures</button></div>
      </Link>
    </div>
  );
}

export default FindContract;

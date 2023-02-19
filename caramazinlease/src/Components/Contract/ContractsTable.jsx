import React from "react";
import styles from "../GroupeCss/formSave.css"
import ContractRow from "./ContractRow";
import api from "../../api/carlease";
import Table from 'react-bootstrap/Table';

function ContractsTable(props) {
  const deleteHandler = async (contract) => {
    try {
      await api.delete("/contracts/" + contract.id);
      props.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["contracts-table-container"]}>
      <Table striped bordered>
        <thead>
          <tr>
            <th>id</th>
            <th>Date Contrat</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Prix total</th>
            <th>Avance</th>
            <th>Reste</th>
            <th>Lieu de retour</th>
            {/* <th>Id Car </th>
            <th>Id Client</th> */}
          </tr>
        </thead>
        <tbody>
          {props.contracts.map((contract) => {
            return <ContractRow contract={contract} onDelete={deleteHandler} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default ContractsTable;

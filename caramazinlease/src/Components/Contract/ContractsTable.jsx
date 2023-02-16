import React from "react";
import ContractRow from "./ContractRow";
import api from "../../api/carlease";
import styles from "./ContractsTable.module.css";

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
      <table>
        <thead>
          <tr>
            <th>Date Contrat</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Prix total</th>
            <th>Avance</th>
            <th>Reste</th>
            <th>Lieu de retour</th>
            {/* <th>Id Car </th>
            <th>Id Client</th> */}
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.contracts.map((contract) => {
            return <ContractRow contract={contract} onDelete={deleteHandler} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ContractsTable;

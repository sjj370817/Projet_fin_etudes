import React from "react";
import ClientRow from "./ClientRow";
import api from "../../api/carlease";
import styles from "./ClientsTable.module.css";

function ClientsTable(props) {
  const deleteHandler = async (client) => {
    try {
      await api.delete("/clients/" + client.id);
      props.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["clients-table-container"]}>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adresse</th>
            <th>Date de naissance</th>
            <th>Fidélité</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.clients.map((client) => {
            return <ClientRow client={client} onDelete={deleteHandler} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsTable;

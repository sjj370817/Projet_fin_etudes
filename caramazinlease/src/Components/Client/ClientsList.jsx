import React from "react";
import styles from "../GroupeCss/formSave.css"
import ClientItem from "./ClientItem";
import api from "../../api/carlease";


function ClientsList(props) {
    const deleteHandler = async (client) => {
        try {
            await api.delete("/clients/"+ client.id);
            props.refresh();
        }catch(error){
            console.log(error);
        }
    }; 
    
  return (
    <div className={styles["cars-container"]}>
      {props.clients.map((client) => {
        return <ClientItem client={client}  onDelete={deleteHandler} />;
      })}
    </div>
  )
}

export default ClientsList
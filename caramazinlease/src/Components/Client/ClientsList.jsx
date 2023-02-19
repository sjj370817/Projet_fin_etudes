import React from "react";
import ClientItem from "./ClientItem";
import api from "../../api/carlease";
import "../GroupeCss/formList.css"

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
    <div className="list">
      {props.clients.map((client) => {
        return <ClientItem client={client}  onDelete={deleteHandler} />;
      })}
    </div>
  )
}

export default ClientsList
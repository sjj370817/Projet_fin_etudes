import React from "react";
import styles from "./OptionStyle.css"
import api from "../../api/carlease";
import OptionRow from "./OptionIRow";
import Table from 'react-bootstrap/Table';

function OptionsTable(props) {
    const deleteHandler = async (option) => {
        try {
          await api.delete("/options/" + option.id);
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
              <th>#</th>
              <th>Nom</th>
              <th>Description</th>
              <th>IdVoiture</th>
              {/* <th>Id Car </th>
              <th>Id Client</th> */}
            </tr>
          </thead>
          <tbody>
            {props.options.map((option) => {
              return <OptionRow option={option} onDelete={deleteHandler} />;
            })}
          </tbody>
        </Table>
      </div>
  );
}

export default OptionsTable
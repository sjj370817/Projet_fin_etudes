import React from "react";
import styles from "../GroupeCss/formSave.css"
import ContractRow from "./ContractRow";
import api from "../../api/carlease";
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ContractsTable(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setId] = React.useState("");

  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteHandler = async (contract) => {
    try {
      await api.delete("/contracts/" + selectedId);
      props.refresh();
    } catch (error) {
      console.log(error);
    }finally {
      setOpen(false);
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
            return <ContractRow contract={contract} onDelete={()=> handleClickOpen(contract.id)} />;
          })}
          <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirmation de suppression"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Voulez-vous vraiment supprimer cette voiture?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Non</Button>
          <Button onClick={deleteHandler} autoFocus>
            Oui
          </Button>
        </DialogActions>
      </Dialog>
        </tbody>
      </Table>
    </div>
  );
}

export default ContractsTable;

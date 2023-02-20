import React from "react";
import styles from "./OptionStyle.css"
import api from "../../api/carlease";
import OptionRow from "./OptionIRow";
import Table from 'react-bootstrap/Table';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function OptionsTable(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setId] = React.useState("");

  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const deleteHandler = async (option) => {
        try {
          await api.delete("/options/" + selectedId);
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
              <th>#</th>
              <th>Nom</th>
              <th>Description</th>
              {/* <th>Id Car </th>
              <th>Id Client</th> */}
            </tr>
          </thead>
          <tbody>
            {props.options.map((option) => {
              return <OptionRow option={option} onDelete={()=> handleClickOpen(option.id)} />;
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

export default OptionsTable
import React from 'react'
import "../GroupeCss/formList.css"
import InvoiceItem from "./InvoiceItem";
import api from "../../api/carlease";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function InvoicesList(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setId] = React.useState("");

  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteHandler = async (id) =>{
      try {
        await api.delete("/invoices/" + selectedId);
        props.refresh();
      }catch (error){
        console.log(error);
      } finally {
        setOpen(false);
      }
  };
  return (
    <div className="list" style={{width:"100%", display: 'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>
      {props.invoices.map((invoice) => {
        return <InvoiceItem invoice={invoice} key={invoice.id} onDelete={()=> handleClickOpen(invoice.id)} />;
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
    </div>
  );
}

export default InvoicesList
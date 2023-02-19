import React from "react";
import CarItem from "./CarItem";
import api from "../../api/carlease";
import "../GroupeCss/formList.css"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function CarsList(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setId] = React.useState("");

  const handleClickOpen = (id) => {
    setOpen(true);
    setId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteHandler = async () => {
    try {
      await api.delete("/cars/" + selectedId);
      props.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setOpen(false);
    }
  };

  return (
    <div className="list" style={{width:"100%", display: 'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>
      {props.cars.map((car) => {
        return <CarItem car={car} key={car.id} onDelete={() => handleClickOpen(car.id)} />;
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

export default CarsList;

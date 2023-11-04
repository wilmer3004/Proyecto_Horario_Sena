import * as React from 'react';
import axios from 'axios'


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';


export const ModalDelet = ({
  open,
  handleClose,
  id,
  nombreInstructor
}) => {

  const eliminarInstructor = async () => {
    try {
      await axios.delete(`http://localhost:3000/instructor/${id}`);
      console.log(`Instructor con ID ${id} eliminado correctamente`);
      handleClose()
      window.location.reload(); // Recarga la página
      // Puedes realizar otras acciones después de la eliminación, como actualizar la lista de instructores, etc.
    } catch (error) {
      console.error(`Error al eliminar el instructor con ID ${id}`, error);
    }
  };
  
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <h1 className='text-2xl text-center text-red-500'>ELIMINAR</h1>
          <Divider/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <h5 className='mt-3 font-bold text-lg uppercase pb-2'>instructor {nombreInstructor}</h5>
            <p className='px-2 text-gray-400'>
             ¿Está seguro de eliminar al instructor? Con esta acción se desactivarán los datos del mismo y toda su información relacionada.  
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button 
            className='p-2  rounded-md text-red-500 hover:shadow-lg hover:border transition-all'
            onClick={eliminarInstructor}>Eliminar</button>
          <button
            className='p-2 border rounded-md text-gray-600 hover:shadow-lg transition-all' 
            onClick={handleClose} autoFocus>
            Cancelar
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
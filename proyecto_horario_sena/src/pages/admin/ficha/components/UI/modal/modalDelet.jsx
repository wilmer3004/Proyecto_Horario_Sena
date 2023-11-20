"use client";

import * as React from 'react';
import axios from 'axios'


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Divider from '@mui/material/Divider';
import { eliminarTematica } from '../../../data/sendRequest';


export const ModalDelet = ({
  open,
  handleClose,
  id,
}) => {

  // Metodo delet para elimianar la tematica
  const handleDeletFicha = async () => {
    try{
      await eliminarTematica(id)
      handleClose()
      window.location.reload(); 
    }catch{
      console.error("Error al eliminar el instructor:", error.message)
    }
  }
  
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <h5 className='mt-3 font-semibold text-lg uppercase pb-2'>Esta usted seguro ?</h5>
            <p className='px-2 text-gray-400'>
             ¿Está seguro de eliminar la Temática? Con esta acción se desactivarán los datos del mismo y toda su información relacionada.  
            </p>
          </DialogContentText>
        </DialogContent>
        <Divider/>
        <DialogActions>
          <button
            className='p-2 border rounded-md text-gray-600 hover:shadow-lg transition-all' 
            onClick={handleClose} autoFocus>
            Cancelar
          </button>
          <button 
            className='p-2 bg-red-500 rounded-md text-white hover:shadow-lg transition-all'
            onClick={handleDeletFicha}>Eliminar</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
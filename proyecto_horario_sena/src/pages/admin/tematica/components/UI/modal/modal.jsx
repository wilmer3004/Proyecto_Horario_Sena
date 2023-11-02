import React, { useState } from 'react'
import axios from 'axios'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const ModalTematica = ({
  open, 
  handleClose, 
  name,
  id,
  descr,
  maxHoursM,
  maxHoursS,
  quarter

  
}) => {

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Actualizar</DialogTitle>
        <DialogContent>
          <h1 className='text-xl text-center font-semibold text-gray-500 pb-4'>{name} | ID: {id}</h1>
          <Divider/> 
          <div className='flex p-4 justify-center gap-8'>
              <Box
                className='p-4 grid grid-cols-4 overflow-hidden gap-4 items-center justify-center'
                component="form"
                noValidate
                autoComplete="off"
              >
                <TextField 
                  className='col-span-2'
                  id="name"
                  label="Nombre" 
                  defaultValue={name}
                  size='small'
                  />
                <TextField 
                  className='col-span-2'
                  id="maxHoursM"
                  label="Maximas horas mensuales"
                  size='small'
                  defaultValue={maxHoursM}
                  />
                <TextField 
                  className='col-span-2'
                  id="maxHoursS"
                  label="Maximas horas semanales"
                  size='small'
                  defaultValue={maxHoursS}
                  />
                <TextField 
                  className='col-span-2'
                  id="trimestre"
                  label="Trimestre"
                  size='small'
                  defaultValue={quarter}
                  />
                <TextField 
                  className='col-span-4'
                  id="descripcion"
                  label="Descripción" 
                  defaultValue={descr}
                  size='small'
                  />
              </Box>
              
            </div>
        </DialogContent>
        <DialogActions>
          <Button  variant='contained'>Enviar</Button>
          <Button onClick={handleClose}>Cerrar</Button>
          {/* Puedes agregar más botones para acciones adicionales */}
        </DialogActions>
      </Dialog>

    </>

  )
}

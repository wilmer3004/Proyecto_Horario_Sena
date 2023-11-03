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

export const ModalInstructor = ({
  open, 
  handleClose, 
  img, 
  name,
  id,
  lastName,
  weeklyHours,
  idType

}) => {

  const [formValues, setFormValues] = useState({
    name,
    lastName,
    weeklyHours,
    idType
  })

  const handleFieldChanges = (fieldName) => (event) =>{
    setFormValues({
      ...formValues,
      [fieldName]:event.target.value,
    })
  }

  const handleUpdate = ()=>{
    const apiUrl = `http://localhost:3000/instructor/2`;


    const postData = {
      nombreInstructor: formValues.name,
      apellidoInstructor: formValues.lastName,
      estadoInstructor: formValues.idType,
      horasSemanales: formValues.weeklyHours,
    }
    
    
    postDataToEndpoint(apiUrl, postData)
      .then((response)=>{
        console.log('Solicitud aceptada', response)
      })
      .catch((error)=>{
        console.log('error solicitud', error)
      })
  }   

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Actualizar</DialogTitle>
        <DialogContent>
          <h1 className='text-xl text-center font-semibold text-gray-500 pb-4'>{name} | ID: {id}</h1>
          <Divider/> 
          <div className='flex p-4 justify-center gap-8'>
            <img
              className='object-cover rounded-lg shadow-lg h-[150px] w-[150px] mt-4'
              src={img} 
              alt={name} />
            <div>
              <Box
                className='p-4 grid grid-cols-4 overflow-hidden gap-4 items-center justify-center'
                component="form"
                noValidate
                autoComplete="off"
              >
                <TextField 
                  className='col-span-2'
                  id="nameInstructor"
                  label="Nombre" 
                  value={formValues.name}
                  size='small'
                  onChange={handleFieldChanges('name')}
                  />
                <TextField 
                  className='col-span-2'
                  id="lastNameInstructor"
                  label="Apellido" 
                  value={formValues.lastName}
                  size='small'
                  onChange={handleFieldChanges('lastName')}
                  />
                <TextField 
                  className='col-span-2'
                  id="weeklyHours"
                  label="Horas Semanales"
                  value={formValues.weeklyHours} 
                  size='small'
                  onChange={handleFieldChanges('weeklyHours')}
                  />
                <TextField 
                  className='col-span-2'
                  id="idType"
                  label="Tipo identificación"
                  value={formValues.idType === 1 ? "Activo" : "Inactivo"}
                  size='small'
                  onChange={handleFieldChanges('idType')}
                  />
              </Box>
              
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={handleUpdate}>Enviar</Button>
          <Button onClick={handleClose}>Cerrar</Button>
          {/* Puedes agregar más botones para acciones adicionales */}
        </DialogActions>
      </Dialog>

    </>

  )
}

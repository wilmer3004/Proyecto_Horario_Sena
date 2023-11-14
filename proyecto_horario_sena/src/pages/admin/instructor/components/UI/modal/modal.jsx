"use client";


import React, { useState } from 'react'
import { tipoDocData } from '../../../data/sendRequest';
import { InputLabel } from '../../../../../../components/input/inputUpdate';
import { actualizarInstructor } from '../../../data/sendRequest';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';

export const ModalInstructor = ({
  open, 
  handleClose,
  id, 
  nombreInstructor,
  apellidoInstructor,
  estadoInstructor,
  horasSemanales,
  imagenInstructor,
  idTpoIdentificacionFK,
}) => {
  
  // ALmacenamos la informacion que actualizaremos en un estado para luego enviarla al metodo PUT
  
  const tiposDoc = tipoDocData()
  const [instructorData, setInstructorData] = useState({
    nombreInstructor: nombreInstructor,
    apellidoInstructor: apellidoInstructor,
    estadoInstructor:estadoInstructor,
    horasSemanales: horasSemanales,
    imagenInstructor: imagenInstructor,
    idTpoIdentificacionFK: idTpoIdentificacionFK,
  });


//  Almacenamos la informacion de los input en su respectiva constante
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstructorData({
      ...instructorData,
      [name]: value,
    });
  };

  // Metodo PUT para acutializar lainformacion del instructor
  const handleActualizarInstructor = async () => {
    try{
      await actualizarInstructor(id, instructorData, handleClose)
    } 
    catch (error){
      console.error("Error al actualizar la ficha:", error.message);
    }
  }

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ACTUALIZAR</DialogTitle>
        <Divider/>
        <DialogContent>
          <h1 className='text-xl text-center font-semibold uppercase text-gray-500 pb-4'>{nombreInstructor} | ID: {id}</h1>
          <div className='flex items-center justify-center py-4 gap-4'>
            <img 
              className='object-cover h-[150px] w-[150px] rounded-md shadow-lg '
              src={imagenInstructor} alt={nombreInstructor} />
            <div className='grid grid-cols-4 py-4 gap-4'>
              <InputLabel
                col={2}
                htmlId="nombre"
                label="Nombre"
                name="nombreInstructor"
                value={instructorData.nombreInstructor}
                onChange={handleInputChange}
              />
              <InputLabel
                col={2}
                htmlId="apellido"
                label="Apellidos"
                name="apellidoInstructor"
                value={instructorData.apellidoInstructor}
                onChange={handleInputChange}
              />
              <select
                className='shadow-lg col-span-2 p-2 border rounded-md focus:outline-none appearance-none'
                name="estadoInstructor"
                value={instructorData.estadoInstructor}
                onChange={handleInputChange}
              >
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
              </select>
              <select
                className='shadow-lg col-span-2 p-2 border rounded-md focus:outline-none appearance-none'
                name="idTpoIdentificacionFK"
                value={instructorData.idTpoIdentificacionFK}
                onChange={handleInputChange}
              >
                {
                  // Mapeo de la informacion que pertenece al parametro tipos doc en bd 
                  tiposDoc.map((tipo)=>(
                    <option key={tipo.id} value={(tipo.id)}>{tipo.nombreTipoIdentificacion}</option>
                  ))
                }
              </select>
              <InputLabel
                col={2}
                htmlId="horas"
                label="Horas Semanales"
                name="horasSemanales"
                value={instructorData.horasSemanales}
                onChange={handleInputChange}
              />
              <InputLabel
                col={2}
                htmlId="Imagen"
                label="Url Imagen"
                name="imagenInstructor"
                value={instructorData.imagenInstructor}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button 
            className='p-2 border rounded-md hover:shadow-lg transition-all'
            onClick={handleActualizarInstructor}>Actualizar</button>
          <button 
            className='p-2 bg-red-500 text-white border rounded-md hover:shadow-lg transition-all'
            onClick={handleClose}>Cerrar</button>
        </DialogActions>
      </Dialog>

    </>

  )
}

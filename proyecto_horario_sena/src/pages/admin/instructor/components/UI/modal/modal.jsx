import React, { useState } from 'react'
import axios from 'axios'

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
}) => {

  const [instructorData, setInstructorData] = useState({
    nombreInstructor: nombreInstructor,
    apellidoInstructor: apellidoInstructor,
    estadoInstructor:estadoInstructor,
    horasSemanales: horasSemanales,
    imagenInstructor: imagenInstructor,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInstructorData({
      ...instructorData,
      [name]: value,
    });
  };

  const actualizarInstructor = async () => {
    try {
      await axios.put(`http://localhost:3000/instructor/${id}`, {
        ...instructorData,
        idTrimestre: "2",
      });
      handleClose()
      console.log("Instructor actualizado correctamente");
      window.location.reload(); // Recarga la página
    } catch (error) {
      console.error("Error al actualizar el instructor", error);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Actualizar</DialogTitle>
        <DialogContent>
          <h1 className='text-xl text-center font-semibold text-gray-500 pb-4'>{nombreInstructor} | ID: {id}</h1>
          <Divider/>
          <div className='flex items-center justify-center py-4 gap-4'>
            <img 
              className='object-cover h-[150px] w-[150px] rounded-md shadow-lg '
              src={imagenInstructor} alt={nombreInstructor} />
            <div className='grid grid-cols-4 py-4 gap-4'>
              <input
                className='col-span-2 p-2 border rounded-md '
                type="text"
                name="nombreInstructor"
                placeholder="Nuevo Nombre"
                value={instructorData.nombreInstructor}
                onChange={handleInputChange}
              />
              <input
                className='col-span-2 p-2 border rounded-md '
                type="text"
                name="apellidoInstructor"
                placeholder="Nuevo Apellido"
                value={instructorData.apellidoInstructor}
                onChange={handleInputChange}
              />
              <select
                className='col-span-2 p-2 border rounded-md focus:outline-none appearance-none'
                name="estadoInstructor"
                value={instructorData.estadoInstructor}
                onChange={handleInputChange}
              >
                <option value="0">Inactivo</option>
                <option value="1">Activo</option>
              </select>
              <input
                className='col-span-2 p-2 border rounded-md '
                type="text"
                name="horasSemanales"
                placeholder="Nuevas Horas Semanales"
                value={instructorData.horasSemanales}
                onChange={handleInputChange}
              />
              <input
                className='col-span-4 p-2 border rounded-md '
                type="text"
                name="imagenInstructor"
                placeholder="Nueva URL Imagen"
                value={instructorData.imagenInstructor}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <button 
            className='p-2 border rounded-md hover:shadow-lg transition-all'
            onClick={actualizarInstructor}>Actualizar Instructor</button>
          <button 
            className='p-2 text-red-600 border rounded-md hover:shadow-lg transition-all'
            onClick={handleClose}>Cerrar</button>
          {/* Puedes agregar más botones para acciones adicionales */}
        </DialogActions>
      </Dialog>

    </>

  )
}

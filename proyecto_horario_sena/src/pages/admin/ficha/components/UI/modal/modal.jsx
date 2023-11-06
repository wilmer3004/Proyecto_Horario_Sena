import React, { useState } from 'react'
import axios from 'axios'
import { InputLabel } from '../../../../../../components/input/inputUpdate';
import { programaData } from '../../../data/sendRequest';
import { jornadaData } from '../../../data/sendRequest';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';

export const ModalFicha = ({
  open, 
  handleClose,
  id, 
  nombreFicha,
  estadoFicha,
  idProgramaFK,
  idJornadaFK,
}) => {

  const idPrograma = programaData()
  const idJornada = jornadaData()
  // ALmacenamos la informacion que actualizaremos en un estado para luego enviarla al metodo PUT

  const [fichaData, setFichaData] = useState({
    nombreFicha: nombreFicha,
    estadoFicha: estadoFicha,
    idProgramaFK:idProgramaFK,
    idJornadaFK: idJornadaFK,
  });


//  Almacenamos la informacion de los input en su respectiva constante
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFichaData({
      ...fichaData,
      [name]: value,
    });
  };

  // Metodo PUT para acutializar lainformacion de la Ficha
  // Mejorar el codigo para tener buenas practicas
  const actualizarFicha = async () => {
    try {
      await axios.put(`http://localhost:3000/ficha/${id}`, {
        ...fichaData,
      });
      handleClose()


      // Manejo de errores 
      if(!fichaData.nombreFicha){
        return new error ("Nombre requerido", { status: 400 })
      }
      if(!fichaData.estadoFicha){
        return new error ("Estado requerido", { status: 400 })
      }
      if(!fichaData.idProgramaFK){
        return new error ("Programa requerido", { status: 400 })
      }
      if(!fichaData.idJornadaFK){
        return new error ("Jornada requerido", { status: 400 })
      }

      console.log("Ficha actualizada correctamente");
      window.location.reload(); // Recarga la página
    } catch (error) {
      console.error("FICHA_PATCH", error);
      return new error ("Internal error", {status: 500})
    }
  };


  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <div className='w-[590px]'>
          <DialogTitle>ACTUALIZAR</DialogTitle>
          <Divider/>
          <DialogContent>
            <h1 className='text-xl text-center font-semibold uppercase text-gray-500 pb-4'>{nombreFicha} | ID: {id}</h1>
            <div className='flex items-center justify-center gap-4'>
              <div className='grid grid-cols-8 py-4 gap-4 w-full'>
                <InputLabel
                  col={4}
                  htmlId="nombreFicha"
                  label="Nombre"
                  name="nombreFicha"
                  value={fichaData.nombreFicha}
                  onChange={handleInputChange}
                />
                <select
                  className='shadow-lg col-span-4 p-2 border rounded-md focus:outline-none appearance-none'
                  name="idProgramaFK"
                  value={fichaData.idProgramaFK}
                  onChange={handleInputChange}
                >
                  {
                    // Mapeo de la informacion que pertenece al parametro tipos doc en bd 
                    idPrograma.map((item)=>(
                      <option key={item.id} value={(item.id)}>{item.nombrePrograma}</option>
                    ))
                  }
                </select>
                <select
                  className='shadow-lg col-span-4 p-2 border rounded-md focus:outline-none appearance-none'
                  name="idJornadaFK"
                  value={fichaData.idJornadaFK}
                  onChange={handleInputChange}
                >
                  {
                    // Mapeo de la informacion que pertenece al parametro tipos doc en bd 
                    idJornada.map((item)=>(
                      <option key={item.id} value={(item.id)}>{item.nombreJornada}</option>
                    ))
                  }
                </select>
                <select
                  className='shadow-lg col-span-4 p-2 border rounded-md focus:outline-none appearance-none'
                  name="estadoFicha"
                  value={fichaData.estadoFicha}
                  onChange={handleInputChange}
                >
                  <option value="1">Activo</option>
                  <option value="0">Inactivo</option>
                </select>
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button 
              className='p-2 border rounded-md hover:shadow-lg transition-all'
              onClick={actualizarFicha}>Actualizar</button>
            <button 
              className='p-2 bg-red-500 text-white border rounded-md hover:shadow-lg transition-all'
              onClick={handleClose}>Cerrar</button>
          </DialogActions>
        </div>
      </Dialog>

    </>

  )
}

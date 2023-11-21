

import { useState, useCallback } from 'react'
import { InputLabel } from '../../../../../../components/input/inputUpdate';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Divider from '@mui/material/Divider';
import { actualizarPrograma } from '../../../data/sendRequest';

export const ModalPrograma = ({
  open, 
  handleClose,
  id, 
  nombrePrograma,
  descripcionPrograma,
  versionPrograma,
  estadoPrograma,
}) => {
  
  // ALmacenamos la informacion que actualizaremos en un estado para luego enviarla al metodo PUT

  const [programaData, setProgramaData] = useState({
    nombrePrograma: nombrePrograma,
    descripcionPrograma: descripcionPrograma,
    versionPrograma: versionPrograma,
    estadoPrograma: estadoPrograma,
  });


//  Almacenamos la informacion de los input en su respectiva constante
const handleInputChange = (e) => {
  if (e.target) {
    const { name, value } = e.target;
    setProgramaData({
      ...programaData,
      [name]: value,
    }); 
  }
};

  // Metodo PUT para acutializar lainformacion de la programa
  const handleActualizarPrograma = async ()=>{
    try{
      await actualizarPrograma(id, programaData, handleClose)
    }catch (error) {
      console.error( "Error al actualizar Progrma:",error.message)
    }
  }
  

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <div className='w-[590px]'>
          <DialogTitle>ACTUALIZAR</DialogTitle>
          <Divider/>
          <DialogContent>
            <h1 className='text-xl text-center font-semibold uppercase text-gray-500 pb-4'>{nombrePrograma} | ID: {id}</h1>
            <div className='flex items-center justify-center gap-4'>
              <div className='grid grid-cols-8 py-4 gap-4 w-full'>
                <InputLabel
                  col={4}
                  htmlId="nombre"
                  label="Nombre programa"
                  name="nombrePrograma"
                  value={programaData.nombrePrograma}
                  onChange={handleInputChange}
                />
                <InputLabel
                  col={4}
                  htmlId="versi"
                  label="Versión Programa"
                  name="versionPrograma"
                  value={programaData.versionPrograma}
                  onChange={handleInputChange}
                />
                <select
                  className='shadow-lg col-span-8 p-2 border rounded-md focus:outline-none appearance-none'
                  name="estadoPrograma"
                  value={programaData.estadoPrograma}
                  onChange={handleInputChange}
                >
                  <option value="1">Activo</option>
                  <option value="0">Inactivo</option>
                </select>
                <InputLabel
                  col={8}
                  htmlId="descript"
                  label="Descripción"
                  name="descripcionPrograma"
                  value={programaData.descripcionPrograma}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <button 
              className='p-2 border rounded-md hover:shadow-lg transition-all'
              onClick={handleActualizarPrograma}>Actualizar</button>
            <button 
              className='p-2 bg-red-500 text-white border rounded-md hover:shadow-lg transition-all'
              onClick={handleClose}>Cerrar</button>
          </DialogActions>
        </div>
      </Dialog>

    </>

  )
}

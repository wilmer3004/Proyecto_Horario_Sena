import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' 

import { InputLabel } from '../../../../../../components/input/input'
import { registrarPrograma } from '../../../data/sendRequest'

export const FormPrograma = () => {
  const [nombrePrograma, setNombrePrograma] = useState('');
  const [descripcionPrograma, setDescripcionPrograma] = useState('');
  const [versionPrograma, setVersionPrograma] = useState('')
  const [estadoPrograma, setEstadoPrograma] = useState('1');


  const handleSubmit = async (event) => {
    event.preventDefault();

    // almacenamos la infromacion de registro en un arreglo
    const programaData = {
      id: uuidv4(),
      nombrePrograma,
      descripcionPrograma,
      versionPrograma,
      estadoPrograma,
    };
    
    try{
      await registrarPrograma(programaData)
      console.log("Registrado")
    }catch (error){
        console.log("Error",error)
    }
    
    // Metodo POST que utilizamos para agregar la programa a nuestra bd
  };

  return (
    <>
      <h1 className='text-center text-2xl font-bold uppercase'>Registrar Programa</h1>
      <form 
          className='flex flex-col items-center justify-center w-[880px]'
          onSubmit={handleSubmit}>
          <div className='grid grid-cols-8 p-4 items-center justify-center gap-x-2 gap-y-2 mb-4 w-[100%]'>
            <InputLabel
              col="4"
              label={"Nombre Programa"}
              htmlId="nomPrograma"
              value={nombrePrograma}
              onChange={setNombrePrograma} 
              inputProps={{ id: "nomPrograma" }}
              />
            <InputLabel 
                col="4"
                label={"Versión"}
                htmlId="versi"
                value={versionPrograma}
                onChange={setVersionPrograma} 
                inputProps={{ id: "versi" }}
              />
            <select
              className='appearance-none mt-3 col-span-8 text-lg text-gray-500 p-2 font-light rounded-md shadow-md outline-none border'
              value={estadoPrograma}
              onChange={(e) => setEstadoPrograma(e.target.value, 10)}
            >
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
            <InputLabel 
              col="8"
              label={"Descripción"}
              htmlId="descrip"
              value={descripcionPrograma}
              onChange={setDescripcionPrograma} 
              inputProps={{ id: "descrip" }}
              />
          </div>
        <button className='bg-primary rounded-md text-center text-white shadow-md p-4' type="submit">Registrar</button>
      </form>
    </>
  )
}


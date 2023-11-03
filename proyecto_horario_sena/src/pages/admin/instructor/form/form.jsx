import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export const FormInstructor = () => {

  const [nombreInstructor, setNombreInstructor] = useState('');
  const [apellidoInstructor, setApellidoInstructor] = useState('');
  const [estadoInstructor, setEstadoInstructor] = useState(1); // Valor predeterminado 1 para "Activo"
  const [horasSemanales, setHorasSemanales] = useState('');
  const [imagenInstructor, setImagenInstructor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const instructorData = {
      nombreInstructor,
      apellidoInstructor,
      estadoInstructor,
      horasSemanales,
      imagenInstructor,
      idTrimestre: "2", // Puedes cambiar esto según tus necesidades
    };

    try {
      await axios.post('http://localhost:3000/instructor', instructorData);
      // Maneja la respuesta exitosa aquí
    } catch (error) {
      // Maneja los errores aquí
    }
  };

  return (
    <>
      <h1 className='text-center text-2xl font-bold'>Registrar instructores</h1>
      <form 
          className='flex flex-col items-center justify-center'
          onSubmit={handleSubmit}>
          <div className='grid grid-cols-8 p-4 items-center justify-center gap-4 mb-4'>
            <input
              className='col-span-4 p-2 font-light rounded-sm shadow-md outline-none border'
              type="text"
              placeholder="Nombre"
              value={nombreInstructor}
              onChange={(e) => setNombreInstructor(e.target.value)}
            />
            <input
              className='col-span-4 p-2 font-light rounded-sm shadow-md outline-none border'
              type="text"
              placeholder="Apellido"
              value={apellidoInstructor}
              onChange={(e) => setApellidoInstructor(e.target.value)}
            />
            <select
              className='col-span-2 p-2 font-light rounded-sm shadow-md outline-none border'
              value={estadoInstructor}
              onChange={(e) => setEstadoInstructor(parseInt(e.target.value, 10))}
            >
              <option value="0">Inactivo</option>
              <option value="1">Activo</option>
            </select>
            <input
              className='col-span-2 p-2 font-light rounded-sm shadow-md outline-none border'
              type="text"
              placeholder="Horas semanales"
              value={horasSemanales}
              onChange={(e) => setHorasSemanales(e.target.value)}
            />
            <input
              className='col-span-4 p-2 font-light rounded-sm shadow-md outline-none border'
              type="text"
              placeholder="URL Imagen"
              value={imagenInstructor}
              onChange={(e) => setImagenInstructor(e.target.value)}
            />
          </div>
        <button className='bg-primary rounded-md text-center text-white shadow-md p-4' type="submit">Registrar Instructor</button>
      </form> 
    </>
  )
}

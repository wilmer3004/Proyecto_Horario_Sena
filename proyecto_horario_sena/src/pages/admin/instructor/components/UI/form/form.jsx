import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { InputLabel } from '../../../../../../components/input/input'

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
        console.log("Registrado")
    } catch (error) {
        console.log("Error en el registro", error)
    }
  };

  return (
    <>
      <h1 className='text-center text-2xl font-bold uppercase'>Registrar instructor</h1>
      <form 
          className='flex flex-col items-center justify-center'
          onSubmit={handleSubmit}>
          <ul className='grid grid-cols-8 p-4 items-center justify-center gap-x-4 gap-y-6 mb-4'>
            <InputLabel
              col="4"
              label={"Nombre"}
              htmlId="nomInstructor"
              inputProps={{ id: "nomInstructor" }}
              value={nombreInstructor}
              onChange={setNombreInstructor} 
              />
            <InputLabel 
              col="4"
              label={"Apellidos"}
              htmlId="apeInstructor"
              value={apellidoInstructor}
              onChange={setApellidoInstructor} 
              inputProps={{ id: "apeInstructor" }}
              />
            <select
              className='mt-4 col-span-2 p-2 font-light rounded-sm shadow-md outline-none border'
              value={estadoInstructor}
              onChange={(e) => setEstadoInstructor(parseInt(e.target.value, 10))}
            >
              <option value="0">Inactivo</option>
              <option value="1">Activo</option>
            </select>
            <InputLabel 
              col="2"
              label={"Horas Semanales"}
              value={horasSemanales}
              htmlId="horInstructor"
              onChange={setHorasSemanales} 
              inputProps={{ id: "horInstructor" }}
              />
            <InputLabel 
              col="4"
              label={"Foto"}
              value={imagenInstructor}
              htmlId="imgInstructor"
              onChange={setImagenInstructor} 
              inputProps={{ id: "imgInstructor" }}
              />
          </ul>
        <button className='bg-primary rounded-md text-center text-white shadow-md p-4' type="submit">Registrar Instructor</button>
      </form> 
    </>
  )
}


"use client";

import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' 

import { InputLabel } from '../../../../../../components/input/input'

export const FormInstructor = () => {
  const [nombreInstructor, setNombreInstructor] = useState('');
  const [apellidoInstructor, setApellidoInstructor] = useState('');
  const [estadoInstructor, setEstadoInstructor] = useState(1); // Valor predeterminado 1 para "Activo"
  const [horasSemanales, setHorasSemanales] = useState('');
  const [imagenInstructor, setImagenInstructor] = useState('');
  const [idTpoIdentificacionFK, setidTpoIdentificacionFK] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // almacenamos la infromacion de registro en un arreglo
    const instructorData = {
      id: uuidv4(),
      nombreInstructor,
      apellidoInstructor,
      estadoInstructor,
      horasSemanales,
      imagenInstructor,
      idTpoIdentificacionFK,
    };

    // Metodo POST que utilizamos para agregar el instructor a nuestra bd
    // Mejorar codigo para cumplir con buenas practicas
    try {
      await axios.post('http://localhost:3000/instructor', instructorData);

        // Manejo de error
        if(!instructorData.nombreInstructor){
          return new error ("Nombre requerido", { status: 400 })
        }
        if(!instructorData.apellidoInstructor){
          return new error ("Apellido requerido", { status: 400 })
        }
        if(!instructorData.estadoInstructor){
          return new error ("Estado requerido", { status: 400 })
        }
        if(!instructorData.horasSemanales){
          return new error ("Horas requerido", { status: 400 })
        }
        if(!instructorData.imagenInstructor){
          return new error ("Imagen requerido", { status: 400 })
        }
        if(!instructorData.idTpoIdentificacionFK){
          return new error ("Tipo identificación requerido", { status: 400 })
        }

        console.log("Registrado")
        window.location.reload(); // Recarga la página
    } catch (error) {
        console.log("REGISTER_PATCH", error)
        return new error("Internal error", {status: 500})
    }
  };

  return (
    <>
      <h1 className='text-center text-2xl font-bold uppercase'>Registrar instructor</h1>
      <form 
          className='flex flex-col items-center justify-center w-[880px]'
          onSubmit={handleSubmit}>
          <div className='grid grid-cols-8 p-4 items-center justify-center gap-x-2 gap-y-2 mb-4 w-[100%]'>
            <InputLabel
              col="4"
              label={"Nombre"}
              htmlId="nomInstructor"
              value={nombreInstructor}
              onChange={setNombreInstructor} 
              inputProps={{ id: "nomInstructor" }}
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
              className='appearance-none mt-4 col-span-4 text-lg text-gray-500 p-2 font-light rounded-sm shadow-md outline-none border'
              value={estadoInstructor}
              onChange={(e) => setEstadoInstructor(e.target.value, 10)}
            >
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>
            <select
                className='appearance-none mt-4 col-span-4 text-lg text-gray-500 p-2 font-light rounded-sm shadow-md outline-none border'
                name="idTpoIdentificacionFK"
                value={idTpoIdentificacionFK}
                onChange={(e) => setidTpoIdentificacionFK(e.target.value, 10)}
              >
                <option value="1">Cedula Ciudadania</option>
                <option value="2">Tarjeta Identidad</option> 
                <option value="3">Cedula Extranjeria</option> 
              </select>
            <InputLabel 
              col="4"
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
          </div>
        <button className='bg-primary rounded-md text-center text-white shadow-md p-4' type="submit">Registrar Instructor</button>
      </form>
    </>
  )
}


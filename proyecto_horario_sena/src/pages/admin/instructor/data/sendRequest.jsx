import { useState, useEffect } from 'react';
import { getDataFromEndpoin } from '../../../../utils/httpRequest';


export const usuarioData = () => {
  const [datos, setDatos] = useState([])

  useEffect(()=>{
      const endpoint = 'instructor';

      getDataFromEndpoin(endpoint)
      .then((data)=>{
          setDatos(data)
      })
      .catch((error)=>{
          console.log("[ERRORFETCH DATA]", error)
      })
  }, []);

  return datos
};

export const crearInstructor = (
    id,
    nombreInstructor,
    apellidoInstructor,
    estadoInstructor,
    horasSemanales,
    imagenInstructor,
    idTpoIdentificacionFK
) =>{
    return fetch("http://localhost:3000/instructor", {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
            id,
            nombreInstructor,
            apellidoInstructor,
            estadoInstructor,
            horasSemanales,
            imagenInstructor,
            idTpoIdentificacionFK
        })
    })
}
export const actializarInstgructor = (
    id,
    nombreInstructor,
    apellidoInstructor,
    estadoInstructor,
    horasSemanales,
    imagenInstructor,
    idTpoIdentificacionFK
) =>{
    return fetch(`http://localhost:3000/instructor/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "aplication/json",
        },
        body: JSON.stringify({
            id,
            nombreInstructor,
            apellidoInstructor,
            estadoInstructor,
            horasSemanales,
            imagenInstructor,
            idTpoIdentificacionFK
        })
        .then((response)=>console.log("Actualizado",response))
        .catch((err)=>console.log("Error Actualizar", err))
    })
}


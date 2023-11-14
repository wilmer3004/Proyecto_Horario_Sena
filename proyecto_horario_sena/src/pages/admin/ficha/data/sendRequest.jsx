import axios from 'axios';
import { useState, useEffect } from 'react';
import { getDataFromEndpoin } from '../../../../utils/httpRequest';


export const fichaData = () => {
  const [datos, setDatos] = useState([])

  useEffect(()=>{
      const endpoint = 'ficha';

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

export const actualizarFicha = async (id, fichaData, handleClose) => {
    try {
      await axios.put(`http://localhost:3000/ficha/${id}`, {
        ...fichaData,
      });
      handleClose();
  
      // Manejo de errores
      if (!fichaData.nombreFicha) {
        throw new Error("Nombre requerido");
      }
      if (!fichaData.estadoFicha) {
        throw new Error("Estado requerido");
      }
      if (!fichaData.idProgramaFK) {
        throw new Error("Programa requerido");
      }
      if (!fichaData.idJornadaFK) {
        throw new Error("Jornada requerido");
      }
  
      console.log("Ficha actualizada correctamente");
      window.location.reload(); // Recarga la página
    } catch (error) {
      console.error("FICHA_PATCH", error);
      throw new Error("Internal error");
    }
  };

export const programaData = () => {
    const [datos, setDatos] = useState([])
  
    useEffect(()=>{
        const endpoint = 'programa';
  
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

  export const jornadaData = () => {
    const [datos, setDatos] = useState([])
  
    useEffect(()=>{
        const endpoint = 'jornada';
  
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
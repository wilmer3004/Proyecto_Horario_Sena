import { API_URL } from '../../../../utils/httpRequest';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { getDataFromEndpoin } from '../../../../utils/httpRequest';


// GET
const endpoint = 'programa';

export const programaData = () => {
  const [datos, setDatos] = useState([])

  useEffect(()=>{

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

// POST
export const registrarPrograma = async (
  programaData
) =>{
  try {
    await axios.post(`${API_URL}/${endpoint}`, programaData);

      // Manejo de error
      if(!programaData.nombrePrograma){
        return new error ("Nombre requerido", { status: 400 })
      }
      if(!programaData.descripcionPrograma){
        return new error ("Descripcion requerida", { status: 400 })
      }
      if(!programaData.versionPrograma){
        return new error ("version requerido", { status: 400 })
      }
      if(!programaData.estadoPrograma){
        return new error ("Estado requerido", { status: 400 })
      }

      console.log("Registrado")
      window.location.reload(); // Recarga la página
  } catch (error) {
      console.log("REGISTER_PATCH", error)
      return new error("Internal error", {status: 500})
  }
  
}


// PUT

export const actualizarPrograma = async (
    id,
    ProgramaData,
    handleClose
) => {
    try {
      await axios.put(`${API_URL}/${endpoint}/${id}`, {
        ...ProgramaData
      });
      handleClose()

      // Manejo de errores    
      if(!ProgramaData.nombrePrograma){
        return new error ("Nombre requerido", { status: 400 })
      }
      if(!ProgramaData.descripcionPrograma){
        return new error ("Descripción requerido", { status: 400 })
      }
      if(!ProgramaData.versionPrograma){
        return new error ("Versión requerido", { status: 400 })
      }
      if(!ProgramaData.estadoPrograma){
        return new error ("Estado requerido", { status: 400 })
      }

      console.log("Programa actualizado correctamente");
      window.location.reload(); // Recarga la página
    } catch (error) {
      console.error("PROGRAMA_PATCH", error);
      return new error ("Internal error", {status: 500})
    }
  };

// DELETE
export const eliminarPrograma = async (id, handleClose) => {
  try {
    await axios.delete(`${API_URL}/${endpoint}/${id}`);
    console.log(`Programa con ID ${id} eliminado correctamente`);
    handleClose()
    window.location.reload(); 
  } catch (error) {
    console.error(`Error al eliminar el programa con ID ${id}`, error);
  }
};

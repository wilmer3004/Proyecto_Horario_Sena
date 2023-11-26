// Url sin end Point
import { API_URL } from '../../../../utils/httpRequest';


import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { getDataFromEndpoin } from '../../../../utils/httpRequest';
import Cookies from 'js-cookie';

const endpoint = 'instructor';
const TOKEN = Cookies.get('token')


// GET
export const fetchData = async ()=>{
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`,
  }
  try{
    const response = await axios.get(`${API_URL}/${endpoint}/`, {headers})
    return response.data
  }catch (error){
    console.error("erro en el fetch", error)
    throw error;
  }
}


// Metodo PUT 
export const actualizarInstructor = async (id, instructorData, handleClose) => {
    try {
      await axios.put(`${API_URL}/${endpoint}/${id}`, {
        ...instructorData,
      });
      handleClose()


      // Manejo de errores 
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

      console.log("Instructor actualizado correctamente");
      window.location.reload(); // Recarga la página
    } catch (error) {
      console.error("INSTRUCTOR_PATCH", error);
      return new error ("Internal error", {status: 500})
    }
  };

  
//   Metodo POST 
export const registrarInstructor = async (instructorData) => {
  try {
    // Validación de campos
    if (!instructorData.nombreInstructor) {
      throw new Error("Nombre requerido");
    }
    if (!instructorData.apellidoInstructor) {
      throw new Error("Apellido requerido");
    }
    if (instructorData.estadoInstructor === undefined || instructorData.estadoInstructor === null) {
      throw new Error("Estado requerido");
    }
    if (!instructorData.horasSemanales) {
      throw new Error("Horas requerido");
    }
    if (!instructorData.imagenInstructor) {
      throw new Error("Imagen requerido");
    }
    if (!instructorData.idTpoIdentificacionFK) {
      throw new Error("Tipo identificación requerido");
    }

    // Agregar ID antes de hacer la solicitud POST
    instructorData.id = uuidv4();

    await axios.post(`${API_URL}/${endpoint}`, instructorData);

    console.log("Instructor registrado correctamente");
    window.location.reload(); // Recarga la página
  } catch (error) {
    console.error("REGISTER_PATCH", error);
    throw new Error("Error al registrar el instructor");
  }
};

// Metodo DELETE 
export const eliminarInstructor = async (id) => {
    try {
      await axios.delete(`${API_URL}/${endpoint}/${id}`);
      console.log(`Instructor con ID ${id} eliminado correctamente`);
    } catch (error) {
      console.error(`Error al eliminar el instructor con ID ${id}`, error);
      throw new Error("Error al eliminar el instructor");
    }
  };
  


// GET Tipo de Dato
export const tipoDocData = () => {
    const [datos, setDatos] = useState([])
  
    useEffect(()=>{
        const endpoint = 'tipoIdentificacion';
  
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


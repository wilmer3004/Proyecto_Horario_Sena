import { useState, useEffect } from 'react';
import { getDataFromEndpoin } from '../../../../utils/httpRequest';


export const usuarioData = () => {
  const [datos, setDatos] = useState([])

  useEffect(()=>{
      const endpoint = 'usuario';

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
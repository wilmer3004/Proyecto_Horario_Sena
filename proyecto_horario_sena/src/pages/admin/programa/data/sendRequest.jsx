import { useState, useEffect } from 'react';
import { getDataFromEndpoin } from '../../../../utils/httpRequest';


export const tematicaData = () => {
  const [datos, setDatos] = useState([])

  useEffect(()=>{
      const endpoint = 'tematica';

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

export const programaId = () => {
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

export const trimestreId = ()=>{
    const [datos, setDatos] = useState([])

    useEffect(()=>{
        const endpoint = 'trimestre';

        getDataFromEndpoin(endpoint)
        .then((data)=>{
            setDatos(data)
        })
        .catch((error)=>{
            console.log("[ERRORFETCH DATA]", error)
        })
    }, []);

    return datos
}


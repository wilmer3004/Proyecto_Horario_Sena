import { useState, useEffect } from 'react';
import { getDataFromEndpoin } from '../../../../utils/httpRequest';


export const sedeData = () => {
  const [datos, setDatos] = useState([])
  const [datoslocalidad, setDatosLocalidad] = useState([])

  useEffect(()=>{
    const endpoint = 'sede';
    const fetchData = async ()=>{
        try{
            const sedeResponse = await getDataFromEndpoin(endpoint)
            setDatos(sedeResponse)
            const localidadResponse = await getDataFromEndpoin("localidad")
            setDatosLocalidad(localidadResponse)
        }catch{
            console.log("Error")
        }   
    }
    fetchData()
  }, []);

  const sedeConLocalindad = datos.map((sede)=>{
    const localidadInfo = datoslocalidad.find((localidad) => localidad.id === sede.idLocalidadFk)
    return{
        ...sede,
        localidadInfo: localidadInfo ? localidadInfo.nombreLocalidad : 'No encontrado'
    }
  })

  return sedeConLocalindad

};
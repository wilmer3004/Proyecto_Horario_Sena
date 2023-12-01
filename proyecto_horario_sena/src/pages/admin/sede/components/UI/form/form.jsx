
import { useState, useEffect } from 'react'
// import { fetchDataTiposDoc } from '../../../data/sendRequest';
import { registrarSede } from '../../../data/sendRequest';

import { InputLabel } from '../../../../../../components/input/input'

export const FormInstructor = () => {
  const [nombreSede, setNombreSede] = useState('');
  const [direccionSede, setDireccionSede] = useState('');
  const [estadoSede, setEstadoSede] = useState(1); // Valor predeterminado 1 para "Activo"
  const [imagenSede, setImagenSede] = useState('');
  const [idLocalidadFK, setIdLocalidadFK] = useState(1);

  // const [tiposDoc, setTipoDoc ] = useState({typesdocs: []})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchDataTiposD = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetchDataTiposDoc();
  //       setTipoDoc(response);
  //     } catch (error) {
  //       console.error('Error en la petición de tipos de documentos:', error);
  //       setError('Error al cargar tipos de documentos');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDataTiposD();
  // }, []);



  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const sedeData = {
        imagenSede,
        nombreSede,
        direccionSede,
        estadoSede,
        idLocalidadFK
      };
  
      await registrarSede(sedeData);
  
      // Realizar acciones adicionales después de registrar el instructor, si es necesario.
      console.log('Sede registrada exitosamente');
    } catch (error) {
      // Manejar errores, mostrando un mensaje o realizando alguna acción específica.
      console.error('Error al registrar la sede:', error.message);
    }
  }
  return (
    <>
      <h1 className='text-center text-2xl font-bold uppercase'>Registrar sede</h1>
      <form 
          className='flex flex-col items-center justify-center w-[880px]'
          onSubmit={handleSubmit}>
          <div className='grid grid-cols-8 p-4 items-center justify-center gap-x-2 gap-y-2 mb-4 w-[100%]'>
            <InputLabel
              col="4"
              label={"Nombre Sede"}
              htmlId="nomSede"
              value={nombreSede}
              onChange={setNombreSede} 
              inputProps={{ id: "nomSede" }}
              />
            <InputLabel 
              col="4"
              label={"Direccion sede"}
              htmlId="direccionSede"
              value={direccionSede}
              onChange={setDireccionSede} 
              inputProps={{ id: "direcSede" }}
              />
            <select
              className='appearance-none mt-4 col-span-4 text-lg text-gray-500 p-2 font-light rounded-sm shadow-md outline-none border'
              value={estadoSede}
              onChange={(e) => setEstadoSede(e.target.value, 10)}
            >
              <option value="1">Activo</option>
              <option value="0">Inactivo</option>
            </select>

            <select 
            className='appearance-none mt-4 col-span-4 text-lg text-gray-500 p-2 font-light rounded-sm shadow-md outline-none border'
            name="idLocalidadFK"
            value={idLocalidadFK}
            >
              <option value="1">Localidad 1</option>

            </select>

            {/* {loading && <p>Cargando localidades...</p>}
            {error && <p>Error: {error}</p>}
            {tiposDoc && (
            <select
                className='appearance-none mt-4 col-span-4 text-lg text-gray-500 p-2 font-light rounded-sm shadow-md outline-none border'
                name="idTipoIdentificacionFK"
                value={idTipoIdentificacionFK}
                onChange={(e) => setIdTipoIdentificacionFK(e.target.value, 10)}
              >
                {
                  // Mapeo de la informacion que pertenece al parametro tipos doc en bd 
                  tiposDoc.typesdocs.map((tipo)=>(
                    <option key={tipo.idTipoIdent} value={(tipo.idTipoIdent)}>{tipo.nombreTipoIdent}</option>
                  ))
                }
              </select>
              )} */}
            <InputLabel 
              col="4"
              label={"Foto"}
              value={imagenSede}
              htmlId="imgSede"
              onChange={setImagenSede} 
              inputProps={{ id: "imgSede" }}
              />
          </div>
        <button className='bg-primary rounded-md text-center text-white shadow-md p-4' type="submit">Registrar Sede</button>
      </form>
    </>
  )
}


import { useEffect, useState } from 'react'
import { getDataHorario, getDataMismos } from './data/sendRequest';

export const HorarioPage = () => {

  const [data, setData] = useState({ bloques: [] })
  const [dataMismos, setDataMismos] = useState({mismos:[]})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    let isMounted = true;

    const fetchDataOnMount = async () => {
      try {
        const response = await getDataHorario();
        if (isMounted) {
          setData(response);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error en la petición:', error);
          setError(error.message || 'Error en la petición');
        }
      } finally {
        // Indicar que la carga ha finalizado, independientemente del resultado
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchDataOnMount();

    // Función de limpieza para cancelar la solicitud si el componente se desmonta
    return () => {
      isMounted = false;
    };
  }, []);


  useEffect(() => {
    let isMounted = true;
    

    const fetchDataOnMount = async () => {
      try {
        const response = await getDataMismos();
        if (isMounted) {
          setDataMismos(response);
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error en la petición:', error);
          setError(error.message || 'Error en la petición');
        }
      }
    };

    fetchDataOnMount();

    return () => {
      isMounted = false;
    };
    
  }, [])

  const [gridContent, setGridContent] = useState(Array(30).fill(''));

  const actualizarGrilla = (conjuntosPosiciones) => {
    const mensajes = {
      primerSetPosiciones: "Java",
      segundoSetPosiciones: "Python",
      tercerSetPosiciones: "JavaScrpt",
      cuartaSetPosiciones: "Bases de datos no relacionales"
    };
    
    const nuevaGrilla = Array(30).fill('').map((_, index) => index + 1);
    
    Object.keys(conjuntosPosiciones).forEach((conjunto) => {
      conjuntosPosiciones[conjunto].forEach((posicion, i) => {
        const fila = Math.floor((posicion - 1) / 5);
        const columna = (posicion - 1) % 5;
        const index = columna + fila * 5;
        nuevaGrilla[index] = mensajes[conjunto] || `Hola (${fila + 1}, ${columna + 1})`;
      });
    });

    setGridContent(nuevaGrilla);
  };

  useEffect(() => {
    const conjuntosPosiciones = {
      primerSetPosiciones: [12, 13, 14],
      segundoSetPosiciones: [17, 18, 19],
      tercerSetPosiciones: [22, 23],
      cuartaSetPosiciones: [2,3,4],

    };
    
    actualizarGrilla(conjuntosPosiciones);
  }, []);


  return (
    <>
      {/* {loading && <p>Cargando...</p>}
          {error && <p>Error: {error}</p>}
          {data && (
            <button onClick={()=>console.log(data.bloques)}>Click me</button>
          )}
      {
        data.bloques.map((item)=>(
          <div key={item.idBloque}>
            Hola
          </div>
        ))
      }
      <button onClick={()=> console.log(dataMismos.mismos)}>Click me mismos</button>
      {
        dataMismos.mismos.map((item)=>(
          <div key={item.idBloque}>
            <p>{item.idPosicion}</p>
          </div>
        ))
      } */}
      <div className="grid text-center  grid-cols-5 grid-rows-6 gap-4">
        {gridContent.map((contenido, index) => (
          <div key={index} className=" p-4  col-span-1 row-span-1 bg-gray-200">{contenido}</div>
        ))}
      </div>
    </>
  )
}

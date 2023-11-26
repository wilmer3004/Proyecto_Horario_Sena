import { useEffect, useState } from 'react'
import { fetchData } from './data/sendRequest';

import LayoutPage from '../../../layouts/LayoutPage';
import { Tab } from '@headlessui/react'
import { TableInstructor} from './components/UI/Table/table';
import { ModalInstructor } from './components/UI/modal/modal';
import { FormInstructor } from './components/UI/form/form';

import Cookies from 'js-cookie';

export const InstructorPage = () => {
  // Informacion recolectada del metodo GET de nuestra bd 
  const [data, setData] = useState({ instructores: [] })
  const token = Cookies.get('token')


  useEffect(() => {
    const fetchDataOnMount = async () => {
      try {
        const response = await fetchData();
        setData(response);
        console.log('Respuesta:', response);
        console.log('Token:', token);
      } catch (error) {
        console.error('Error en la petición:', error);
      }
    };

    fetchDataOnMount();
  }, []); 
  return (
    <LayoutPage 
      desc="Gestione los instructores registrados"
      title={`INSTRUCTORES (${data.instructores.length})`}>
      <ModalInstructor/>
      <Tab.Panels>
        <Tab.Panel>   
          <TableInstructor/>
        </Tab.Panel>
        <Tab.Panel>
          <FormInstructor/>
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}

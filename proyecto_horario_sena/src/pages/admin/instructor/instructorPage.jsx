import React from 'react'
import { usuarioData } from './data/sendRequest';

import LayoutPage from '../../../layouts/LayoutPage';
import { Tab } from '@headlessui/react'
import { TableInstructor} from './components/UI/Table/table';
import { ModalInstructor } from './components/UI/modal/modal';
import { FormInstructor } from './components/UI/form/form';
import Cookies from 'js-cookie'; 


export const InstructorPage = () => {
  // Informacion recolectada del metodo GET de nuestra bd 
  const rows = usuarioData()

  return (
    <LayoutPage 
      desc="Gestione los instructores registrador"
      title={`INSTRUCTORES (${rows.length})`}>
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

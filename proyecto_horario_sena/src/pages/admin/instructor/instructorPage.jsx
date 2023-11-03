import React from 'react'
import { usuarioData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import LayoutPage from '../../../layouts/LayoutPage';
import BasicTable from './components/UI/Table/table';
import { ModalInstructor } from './components/UI/modal/modal';
import { FormInstructor } from './form/form';




export const InstructorPage = () => {
  const datos = usuarioData()

  return (
    <LayoutPage title={`INSTRUCTORES (${datos.length})`}>
      <ModalInstructor/>
      <Tab.Panels>
        <Tab.Panel>
          <BasicTable/>
        </Tab.Panel>
        <Tab.Panel>
          <FormInstructor/>
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}

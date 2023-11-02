import React from 'react'
import { usuarioData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import { Form } from '../../../components/form/Form';
import LayoutPage from '../../../layouts/LayoutPage';
import BasicTable from './components/UI/Table/table';
import { ModalInstructor } from './components/UI/modal/modal';




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
            <Form/>
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}

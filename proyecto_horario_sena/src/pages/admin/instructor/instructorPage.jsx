import React from 'react'
import { usuarioData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import { Card } from '../../../components/cards/Card';
import LayoutPage from '../../../layouts/LayoutPage';
import { Form } from '../../../components/form/Form';
import BasicTable from '../../../components/UI/Table/table';



export const InstructorPage = () => {
  const datos = usuarioData()

  return (
    <LayoutPage title={`INSTRUCTORES (${datos.length})`}>
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

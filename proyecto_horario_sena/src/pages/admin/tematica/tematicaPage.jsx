import React from 'react'
import {tematicaData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import LayoutPage from '../../../layouts/LayoutPage';
import { TableTematica } from './components/UI/Table/table';
import { FormTematica } from './components/UI/form/form';



export const TematicaPage = () => {
  const datos = tematicaData()

  return (
    <LayoutPage 
      title={`TEMÁTICAS (${datos.length})`}
      desc="Gestión de las Tematicas registradas"
      >
      <Tab.Panels>
        <Tab.Panel>
          <TableTematica/>
        </Tab.Panel>
        <Tab.Panel>
          <FormTematica />
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}

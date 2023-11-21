import {programaData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import LayoutPage from '../../../layouts/LayoutPage';
import { TablePrograma } from './components/UI/Table/table';
import { FormPrograma } from './components/UI/form/form';



export const ProgramaPage = () => {
  const datos = programaData()

  return (
    <LayoutPage 
      title={`PROGRAMAS (${datos.length})`}
      desc="Gestión de Programas"
      >
      <Tab.Panels>
        <Tab.Panel>
          <TablePrograma/>
        </Tab.Panel>
        <Tab.Panel>
          <FormPrograma/>
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}

import React from 'react'
import { fichaData } from './data/sendRequest';
import { TableFicha } from './components/UI/Table/table';

import { Tab } from '@headlessui/react'
import LayoutPage from '../../../layouts/LayoutPage';



export const FichaPage = () => {
  const datos = fichaData()

  return (
    <LayoutPage title={`FICHAS (${datos.length})`}>
      <Tab.Panels>
        <Tab.Panel>
          <TableFicha/>
        </Tab.Panel>
        <Tab.Panel>
          {/* form */}
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}

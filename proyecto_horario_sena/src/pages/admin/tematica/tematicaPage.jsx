import React from 'react'
import {tematicaData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import { Card } from '../../../components/cards/Card';
import LayoutPage from '../../../layouts/LayoutPage';
import BasicTable from './components/UI/Table/table';



export const TematicaPage = () => {
  const datos = tematicaData()

  return (
    <LayoutPage title={`TEMATICAS (${datos.length})`}>
      <Tab.Panels>
        <Tab.Panel>
          <BasicTable/>
        </Tab.Panel>
        <Tab.Panel>
            tab 3
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}

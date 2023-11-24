import React from 'react'
import { sedeData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import LayoutPage from '../../../layouts/LayoutPage';
import { Cards } from './componnets/UI/cards';



export const SedePage = () => {
  const datos = sedeData()

  return (
    <LayoutPage title="SEDES">
      <Tab.Panels>
        <Tab.Panel>
          <Cards/>
        </Tab.Panel>
        <Tab.Panel>
            tab 3
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}

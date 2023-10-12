import React from 'react'
import {trimestreData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import { Card } from '../../../components/cards/Card';
import LayoutPage from '../../../layouts/LayoutPage';



export const TrimestrePage = () => {
  const datos = trimestreData()

  return (
    <LayoutPage title="TRIMESTRES">
      <Tab.Panels>
        <Tab.Panel>
            <div className="flex items-center justify-center gap-6 flex-wrap">
                {datos.map((dato)=>(
                  <Card 
                    key={dato.id}
                    title={dato.name} 
                    info={dato.info} 
                    img={dato.img}
                    textColor={0}
                    id={dato.id}
                    />
                ))}
            </div> 
        </Tab.Panel>
        <Tab.Panel>
            tab 3
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}

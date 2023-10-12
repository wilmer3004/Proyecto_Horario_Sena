import React from 'react'
import { fichaData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import { Card } from '../../../components/cards/Card';
import LayoutPage from '../../../layouts/LayoutPage';



export const FichaPage = () => {
  const datos = fichaData()

  return (
    <LayoutPage title="FICHAS">
      <Tab.Panels>
        <Tab.Panel>
            <div className="flex items-center justify-center gap-6 flex-wrap">
                {datos.map((dato)=>(
                  <Card 
                    key={dato.id}
                    title={dato.name} 
                    info={dato.info} 
                    img={dato.img}
                    textColor={1}
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

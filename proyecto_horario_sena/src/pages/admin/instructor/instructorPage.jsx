import React from 'react'
import { usuarioData } from './data/sendRequest';

import { Tab } from '@headlessui/react'
import { Card } from '../../../components/cards/Card';
import LayoutPage from '../../../layouts/LayoutPage';
import { Form } from '../../../components/form/Form';



export const InstructorPage = () => {
  const datos = usuarioData()

  return (
    <LayoutPage title="INSTRUCTORES">
      <Tab.Panels>
        <Tab.Panel>
            <div className="flex items-center justify-center gap-6 flex-wrap">
                {datos.map((dato)=>(
                  <Card 
                    key={dato.idInstructor}
                    title={dato.nombreInstructor} 
                    info={dato.horasSemanales} 
                    img={dato.imagenInstructor}
                    textColor={"red-500"}
                    id={dato.idInstructor}
                    />
                ))}
            </div> 
        </Tab.Panel>
        <Tab.Panel>
            <Form/>
        </Tab.Panel>
      </Tab.Panels>
    </LayoutPage>
  )
}

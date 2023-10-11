import { useState } from "react";
import { Tab } from '@headlessui/react'



export const TabListComp = () =>{
  const [activeTab, setActiveTab] = useState(0); // Estado para controlar la pestaña activa

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return(
      <Tab.List className="flex items-center justify-start gap-3 text-secondary-900">
      <Tab
      className={`p-2 rounded shadow-lg outline-none hover:text-gray-100 hover:bg-primary ${
          activeTab === 0 ? 'bg-primary text-white' : ''
      }`}
      onClick={() => handleTabClick(0)}
      >
      Sedes registradas
      </Tab>
      <Tab
      className={`p-2 rounded shadow outline-none hover:text-gray-100 hover:bg-primary ${
          activeTab === 1 ? 'bg-primary text-white' : ''
      }`}
      onClick={() => handleTabClick(1)}
      >
      Registrar sede
      </Tab>
  </Tab.List>
  )
}
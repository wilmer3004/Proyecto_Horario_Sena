import Card from "../../components/cards/Card"
import { RiBuilding4Line } from "react-icons/ri";
import { Tab } from '@headlessui/react'
import { useState } from "react";


const SedePage = ()=>{
    const [activeTab, setActiveTab] = useState(0); // Estado para controlar la pestaña activa

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
    return(
    <Tab.Group>
        <div className="flex items-center justify-center font-bold tracking-wide text-gray-600 gap-4 flex-wrap">
            <div className="flex flex-col md:flex-row text-center items-center justify-center md:justify-between gap-4 p-4 bg-gray-300/30 rounded-lg w-full">
                <div className="flex items-center">
                    <RiBuilding4Line className="w-16 h-16 text-primary"/>
                    <h1 className="uppercase p-4 text-2xl md:text-3xl text-center md:text-start ">sedes registradas y activas</h1>
                </div>
                <Tab.List className="flex items-center justify-start gap-3 text-secondary-900">
                    <Tab
                    className={`p-2 rounded shadow-lg outline-none hover:bg-primary ${
                        activeTab === 0 ? 'bg-primary text-white' : ''
                    }`}
                    onClick={() => handleTabClick(0)}
                    >
                    Sedes registradas
                    </Tab>
                    <Tab
                    className={`p-2 rounded shadow outline-none hover:bg-primary ${
                        activeTab === 1 ? 'bg-primary text-white' : ''
                    }`}
                    onClick={() => handleTabClick(1)}
                    >
                    Registrar sede
                    </Tab>
                </Tab.List>
            </div>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="flex items-center justify-center gap-6 flex-wrap">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div> 
                    </Tab.Panel>
                    <Tab.Panel>
                        tab 3
                    </Tab.Panel>
                </Tab.Panels>
        </div>
    </Tab.Group>
    )
}

export default SedePage;
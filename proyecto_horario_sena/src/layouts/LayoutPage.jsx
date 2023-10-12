
import { useState } from "react";
// sedeData viene de la carpeta data, la cual contiene el fetch del endpoint pasado por parametros


import { RiBuilding4Line, RiAddCircleFill } from "react-icons/ri";
import { Tab } from '@headlessui/react'


const LayoutPage = ({title, children})=>{
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };

    return(
    <Tab.Group>
        <div className="flex items-center justify-center font-bold tracking-wide text-gray-600 gap-4 flex-wrap">
            <div className="flex flex-col md:flex-row text-center items-center justify-center md:justify-between gap-4 p-4 bg-gray-300/30 rounded-lg w-full">
                <div className="flex items-center flex-col md:flex-row">
                    <RiBuilding4Line className="w-16 h-16 text-secondary-900"/>
                    <h1 className="uppercase p-4 text-2xl md:text-3xl text-secondary-900 text-center md:text-start ">{activeTab === 0 ? `${title} REGISTRADOS` : `REGISTRAR ${title}`}</h1>
                </div>
                <Tab.List className="flex items-center justify-start gap-3 text-secondary-900 ">
                    <Tab
                    className={`p-2 rounded shadow-lg outline-none hover:bg-primary hover:text-white transition-colors ${
                        activeTab === 0 ? 'bg-primary text-white' : ''
                    }`}
                    onClick={() => handleTabClick(0)}
                    >
                    REGISTRADOS
                    </Tab>
                    <Tab
                    className={` rounded text-5xl outline-none text-primary hover:text-secondary-900 transition-colors ${
                        activeTab === 1 ? ' text-primary' : ''
                    }`}
                    onClick={() => handleTabClick(1)}
                    >
                    <RiAddCircleFill className=""/>
                    </Tab>
                </Tab.List>
            </div>
                {children}
        </div>
    </Tab.Group>
    )
}

export default LayoutPage;


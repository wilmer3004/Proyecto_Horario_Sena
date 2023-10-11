import Card from "../../components/cards/Card"
import { RiBuilding4Line } from "react-icons/ri";
import { Tab } from '@headlessui/react'
import { TabListComp } from "../../components/tab/TabListComp";

const SedePage = ()=>{

    return(
    <Tab.Group>
        <div className="flex items-center justify-center font-bold tracking-wide text-gray-600 gap-4 flex-wrap">
            <div className="flex flex-col md:flex-row text-center items-center justify-center md:justify-between gap-4 p-4 bg-gray-300/30 rounded-lg w-full">
                <div className="flex items-center">
                    <RiBuilding4Line className="w-16 h-16 text-primary"/>
                    <h1 className="uppercase p-4 text-2xl md:text-3xl text-center md:text-start ">sedes registradas y activas</h1>
                </div>
                <TabListComp/>
            </div>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className="flex items-center justify-center gap-6 flex-wrap">
                            Hacer fetch de datos cuando tengamos la posibilidad de hacerlo
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
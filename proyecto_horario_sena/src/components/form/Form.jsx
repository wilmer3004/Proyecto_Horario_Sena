import { RiUser3Fill } from "react-icons/ri";

export const Form = ()=>{
    return(
        <div className="p-4">
            <div className="flex flex-col items-center gap-4 mb-4">
               <RiUser3Fill className="text-7xl h-24 w-24 p-3 bg-secondary-900 text-gray-100 rounded-full"/>
               <h1 className="text-secondary-900 text-2xl font-bold uppercase tracking-widest">Instructor</h1>
            </div>
            <form className="grid grid-cols-5 gap-2">
                <input type="text" className="col-span-3 bg-red-300" placeholder="Luis" />
                <input type="text" className="col-span-2 bg-red-300" placeholder="Luis" />
                <input type="text" className="col-span-2 bg-red-300" placeholder="Luis" />
                <input type="text" className="col-span-3 bg-red-300" placeholder="Luis" />

            </form>
        </div>
    )
}
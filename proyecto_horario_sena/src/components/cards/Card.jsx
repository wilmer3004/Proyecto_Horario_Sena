import { Button } from "../button/Button";

const Card = ({img, title, descript})=> {
    return(
        <div className="flex items-center flex-col justify-start p-4 rounded-lg w- bg-secondary-100 w-[300px] shadow-lg">
            <div className="">
                <img 
                src={img} 
                alt="Sena sede52"
                className="object-cover block rounded-lg"
                />
                <h1 className=" relative left-2 bottom-10 text-2xl font-semibold text-gray-100 shadow-2xl">{title}</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-gray-600 font-normal pb-2 text-sm text-center">{descript}</p>
                <div className="flex items-center gap-8">
                    <Button title={'Eliminar'} color={'primary'}/>
                    <Button title={'Actualizar'} />
                </div>
            </div>
        </div>
    )
}

export default Card;
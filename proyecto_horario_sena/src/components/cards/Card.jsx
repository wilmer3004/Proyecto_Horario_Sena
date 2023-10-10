import { Button } from "../button/Button";

const Card = ({img})=> {
    return(
        <div className="flex items-center flex-col justify-start p-4 rounded-lg w- bg-secondary-100 w-[340px] shadow-lg">
            <div className="">
                <img 
                src="https://1.bp.blogspot.com/-lmikDKhFcQE/YDf3p_sli1I/AAAAAAAAKwk/bZDD00veXF8uPB8bA-xRW9rH-kZs5bnUgCLcBGAsYHQ/s1200/SENA52.jpg" 
                alt="Sena sede52"
                className="object-cover block rounded-lg"
                />
                <h1 className=" relative left-2 bottom-10 text-2xl font-semibold text-gray-100 shadow-2xl">SENA CALLE 57</h1>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-gray-600 font-medium text-center">CENTRO DE GESTIÓN DE MERCADOS, LOGÍSTICA Y TECNOLOGÍAS DE LA INFORMACIÓN: Sede Calle 52</p>
                <div className="flex items-center gap-8">
                    <Button title={'Eliminar'} color={'primary'}/>
                    <Button title={'Actualizar'} />
                </div>
            </div>
        </div>
    )
}

export default Card;
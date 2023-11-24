import React from 'react'
import { RiMoreLine } from 'react-icons/ri'

export const Cardsede = (
  {
    title,
    estado,
    direc,
    localidad,
    img,
    children
  }
) => {

  return (
    <>
      <div
        className='bg-white border shadow-xl rounded-sm w-[320px] '>
        <div >
          <button>
            {children}
          </button>
          <img 
            className='object-cover rounded-sm'
            src={img} alt="Prueva" />
        </div>
        <div className='py-2 text-lg'>
          <h5 className='uppercase  text-center'>{title}</h5>
        </div>
        <div className='flex flex-col gap-2 p-3'>
          <span className='font-extralight'>
            <span  className='font-semibold'>Dirección: </span>{direc}
          </span>
          <span className='font-extralight'>
            <span  className='font-semibold'>Estado: </span>{estado}
          </span>
          <span className='font-extralight'>
            <span  className='font-semibold'>Localidad: </span>{localidad}
          </span>
        </div>
      </div> 
       
    
    </>
  )
}

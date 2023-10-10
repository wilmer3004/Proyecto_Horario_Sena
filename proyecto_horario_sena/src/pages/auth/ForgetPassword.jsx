import React from 'react'

//Hooks

//Iconos react Remix
import { RiMailLine } from "react-icons/ri";

// Router 
import { Link } from 'react-router-dom';


const ForgetPassword = () => {

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-secondary-900 p-8 rounded-xl flex flex-col gap-4 shadow-2xl w-auto lg:w-[450px]'>
        <h1 className='text-center text-3xl uppercase font-bold tracking-[5px] text-white mb-3'>recuperar <span className='text-primary'>contraseña</span> </h1>
        <form >
          <button className='flex items-center justify-center py-3 px4 mb-8 gap-4 bg-secondary-100 w-full rounded-full text-gray-500'>
            <img 
              className='h-4 w-4 '
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png" 
              alt="Logo Google" /> Ingresa con Google
            </button>
          <div className='relative mb-8'>
              <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
              <input 
                required
                type="email" 
                className='py-3 px-4 bg-secondary-100 w-full outline-none rounded-lg pl-8 pr-4 border border-secondary-900 focus:border-primary transition-all' 
                placeholder='Correo electronico'/>
          </div>
          <div>
            <button 
              type='submit'
              className='bg-secondary-100 w-full py-3 px-4 rounded-lg border border-secondary-100 hover:border-primary transition-all uppercase'>
              Enviar
            </button>
          </div>
        </form>
        <div className='flex flex-col items-center gap-4 text-gray-100'>
          <span className='flex items-center gap-2'>
            ¿Ya tienes cuenta?
            <Link 
              className='text-primary hover:text-gray-100 transition-colors' 
              to='/registro'>Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  )
}


export default ForgetPassword
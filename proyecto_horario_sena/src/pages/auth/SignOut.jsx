import React from 'react'


//Hooks
import { useState } from 'react';

//Iconos react Remix
import { RiMailLine, RiLock2Line, RiEyeLine, RiEyeOffLine, RiUser3Line } from "react-icons/ri";

// Router 
import { Link } from 'react-router-dom';


const SignOut = () => {

  const [showPassword, setShowPassword] = useState(false)


  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-secondary-900 p-8 rounded-xl flex flex-col gap-4 shadow-2xl w-auto lg:w-[450px]'>
    <h1 className='text-center text-3xl uppercase font-bold tracking-[5px] text-white mb-3'>crear  <span className='text-primary'>cuenta </span> </h1>
    <form >
      {/* Botón ingreso con google  */}
      <button className='flex items-center justify-center py-3 px4 mb-8 gap-4 bg-secondary-100 w-full rounded-full text-gray-500'>
         <img 
          className='h-4 w-4 '
          src="https://cdn-icons-png.flaticon.com/512/300/300221.png" 
          alt="Logo Google" /> Registrate con Google
        </button>
{/* imput register nombre */}
      <div className='relative mb-4'>
          <RiUser3Line className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
          <input 
            required
            type="email" 
            className='py-3 px-4 bg-secondary-100 w-full outline-none rounded-lg pl-8 pr-4 border border-secondary-900 focus:border-primary transition-all' 
            placeholder='Nombre(s)'/>
      </div>
{/* Input correo  */}
      <div className='relative mb-4'>
          <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
          <input 
            required
            type="email" 
            className='py-3 px-4 bg-secondary-100 w-full outline-none rounded-lg pl-8 pr-4 border border-secondary-900 focus:border-primary transition-all' 
            placeholder='Correo electronico'/>
      </div>
{/* Input contraseña */}
      <div className='relative mb-4'>
          <RiLock2Line className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
          <input
            required 
            type={showPassword ? "text" : "password"} 
            className='py-3 px-8 bg-secondary-100 w-full outline-none rounded-lg border border-secondary-900 focus:border-primary transition-all' 
            placeholder='Contraseña'/>
          {
            showPassword ? (
              <RiEyeLine 
                onClick={()=> setShowPassword(!showPassword)}
                className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-primary'/>
            ) : (
              <RiEyeOffLine 
                onClick={()=> setShowPassword(!showPassword)}
                className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-primary'/>
            )
          }
      </div>
{/* Confimacion contraseña */}
      <div className='relative mb-4'>
          <RiLock2Line className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
          <input
            required 
            type={showPassword ? "text" : "password"} 
            className='py-3 px-8 bg-secondary-100 w-full outline-none rounded-lg border border-secondary-900 focus:border-primary transition-all' 
            placeholder='Confime su contraseña'/>
          {
            showPassword ? (
              <RiEyeLine 
                onClick={()=> setShowPassword(!showPassword)}
                className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-primary'/>
            ) : (
              <RiEyeOffLine 
                onClick={()=> setShowPassword(!showPassword)}
                className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-primary'/>
            )
          }
            </div>
      <div>
        <button 
          type='submit'
          className='bg-secondary-100 w-full py-3 px-4 rounded-lg border border-secondary-900 hover:border-primary transition-all uppercase'>
          Registrar
        </button>
      </div>
    </form>

      <span className='flex items-center gap-2 justify-center text-secondary-100'>
        ¿Ya tienes cuenta?
        <Link 
          className='text-primary hover:text-gray-100 transition-colors' 
          to='/login'>Ingresa</Link>
      </span>
      </div>
    </div>
  )
}

export default SignOut
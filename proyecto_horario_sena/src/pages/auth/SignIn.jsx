//Hooks
import { useState } from 'react';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
//Iconos react Remix
import { RiMailLine, RiLock2Line, RiEyeLine,RiEyeOffLine } from "react-icons/ri";

// Router 
import { Link } from 'react-router-dom';


const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const [idTipoDocFK, setIdTipoDocFK] = useState('');
  const [numeroIdent, setNumeroIdent] = useState('');
  const [contrasenaUsuario, setContrasenaUsuario] = useState('');
  const [result, setResult] = useState('');

  const login = () => {
    const url = 'https://pqddmp2g-5000.use2.devtunnels.ms/auth/';

    const data = {
      idTipoDocFK,
      numeroIdent,
      contrasenaUsuario,
    };

    axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (response.status === 200) {
        const token = response.data.token;
        setResult(`Inicio de sesión exitoso. Token: ${token}`);

        // Almacena el token en las cookies
        Cookies.set('token', token);

        navigate('/');
      } else {
        setResult('Error al iniciar sesión.');
      }
    })
    .catch(error => {
      console.error('Error al iniciar sesión:', error.message);
      setResult('Error al iniciar sesión.');
    });
  };


  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-secondary-900 p-8 rounded-xl flex flex-col gap-4 shadow-2xl w-auto lg:w-[450px]'>
        <h1 className='text-center text-3xl uppercase font-bold tracking-[5px] text-white mb-3'>Iniciar <span className='text-primary'>sesión</span> </h1>
        <form>
          <button className='flex items-center justify-center py-3 px4 mb-8 gap-4 bg-primary/60 w-full rounded-full text-secondary-100 font-semibold'>
            <img 
              className='h-5 w-5 '
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png" 
              alt="Logo Google" /> Ingresa con Google
            </button>
          <div className='relative mb-4'>
              <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
              <input 
                type="text" 
                id="idTipoDocFK" 
                name="idTipoDocFK" 
                required 
                onChange={(e) => setIdTipoDocFK(e.target.value)}v
                className='py-3 px-4 bg-secondary-10 w-full outline-none rounded-lg pl-8 pr-4 border border-secondary-900 focus:border-primary transition-all' 
                placeholder='Tipo id'/>
          </div>
          <div className='relative mb-4'>
              <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
              <input 
                type="text" 
                id="numeroIdent" 
                name="numeroIdent" 
                required 
                onChange={(e) => setNumeroIdent(e.target.value)}
                className='py-3 px-4 bg-secondary-10 w-full outline-none rounded-lg pl-8 pr-4 border border-secondary-900 focus:border-primary transition-all' 
                placeholder='Correo electronico'/>
          </div>
          <div className='relative mb-4'>
              <RiLock2Line className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
              <input
                type="password" 
                id="contrasenaUsuario" 
                name="contrasenaUsuario" 
                required onChange={(e) => setContrasenaUsuario(e.target.value)}
                className='py-3 px-8 -100 w-full outline-none rounded-lg border border-secondary-900 focus:border-primary transition-all' 
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
          <div>
            <button 
              type="button" 
              onClick={login}
              className='hover:bg-secondary-100 bg-white w-full py-3 px-4 rounded-lg border border-secondary-100 hover:border-primary transition-colors uppercase'>
              Ingresar
            </button>
          </div>
        </form>
        <div className='flex flex-col items-center gap-4 text-gray-100'>
          <Link 
            className='hover:text-primary transition-colors' 
            to='/olvide-mi-contraseña'>¿Olvidaste tu contraseña?</Link>
          <span className='flex items-center gap-2'>
            ¿No tienes cuenta?
            <Link 
              className='text-primary hover:text-gray-100 transition-colors' 
              to='/registro'>Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
export default SignIn;


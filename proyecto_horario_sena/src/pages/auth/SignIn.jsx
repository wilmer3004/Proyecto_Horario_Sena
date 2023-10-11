//Hooks
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

//Iconos react Remix
import { RiMailLine, RiLock2Line, RiEyeLine,RiEyeOffLine } from "react-icons/ri";

// Router 
import { Link, redirect } from 'react-router-dom';


const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false)
  // Logica de logeo 
  const [formData, setFormData] = useState({idTipoDocFK:'', numeroIdent: '', contrasenaUsuario: ''});

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleLogin = async () => {
    try {
      // Serializa los datos en formato JSON
      const data = JSON.stringify(formData);
  
      // Configura el encabezado Content-Type
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // Corregir BreckPoint Para la peticion 
      const response = await axios.post('http://127.0.0.1:5000/auth/', data, config);
      console.log(response)
      
      if (response.status === 200) { // Verifica si la respuesta tiene un código de estado 200 (éxito)
        const token = response.data.token;
        Cookies.set('token', token, {expires:1 / 48});
        return redirect("/")
      } else {
        throw new Error('Error en la solicitud');
      }
    } catch (error) {
      console.log('Error de inicio de sesión', error);
    }
  };

  


  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-secondary-900 p-8 rounded-xl flex flex-col gap-4 shadow-2xl w-auto lg:w-[450px]'>
        <h1 className='text-center text-3xl uppercase font-bold tracking-[5px] text-white mb-3'>Iniciar <span className='text-primary'>sesión</span> </h1>
        <form action='post'>
          <button className='flex items-center justify-center py-3 px4 mb-8 gap-4 bg-primary/60 w-full rounded-full text-secondary-100 font-semibold'>
            <img 
              className='h-5 w-5 '
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png" 
              alt="Logo Google" /> Ingresa con Google
            </button>
          <div className='relative mb-4'>
              <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
              <input 
                required
                type="number"
                name="idTipoDocFK"
                value={formData.idTipoDocFK}
                onChange={handleInputChange}
                className='py-3 px-4 bg-secondary-10 w-full outline-none rounded-lg pl-8 pr-4 border border-secondary-900 focus:border-primary transition-all' 
                placeholder='Tipo doc'/>
          </div>
          <div className='relative mb-4'>
              <RiMailLine className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
              <input 
                required
                type="number"
                name="numeroIdent"
                value={formData.numeroIdent}
                onChange={handleInputChange}
                className='py-3 px-4 bg-secondary-10 w-full outline-none rounded-lg pl-8 pr-4 border border-secondary-900 focus:border-primary transition-all' 
                placeholder='Numero identificación'/>
          </div>
          <div className='relative mb-4'>
              <RiLock2Line className='absolute top-1/2 -translate-y-1/2 left-2 text-primary'/>
              <input
                required 
                type={showPassword ? "text" : "password"} 
                name="contrasenaUsuario"
                value={formData.contrasenaUsuario}
                onChange={handleInputChange}
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
              onClick={handleLogin}
              type='submit'
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

import React from 'react'
import { Link } from 'react-router-dom';


import { 
  RiAccountCircleLine,
  RiLogoutCircleRLine
} from "react-icons/ri";

const Header = () => {
  return (
    <header className=' h-[7vh] md:h-[10vh] xl:ml-1 bg-primary p-8 flex items-center justify-between rounded'>
        <img className='object-cover h-12' src="./logoSenaCort.png" alt="Logo Sena" />
        <div className='flex items-center gap-4 text-3xl text-secondary-100'>
          <Link to='/'>
           <RiAccountCircleLine/>
          </Link>
          <Link to="/">
           <RiLogoutCircleRLine/>
          </Link>
        </div>
    </header>
  )
}

export default Header
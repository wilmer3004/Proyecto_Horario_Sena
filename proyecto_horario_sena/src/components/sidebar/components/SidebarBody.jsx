import { useState } from 'react'
import { Link } from 'react-router-dom'

import { items } from '../sidebarItems/items';


export const SidebarBody = () => {

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='py-6 px-4 flex flex-col justify-between bg-primary h-full rounded'>
      <div>
        <ul className='w-full flex flex-col gap-4'>
        {items.map((item) => (
        <li
          key={item.title}
          className={`flex p-1 items-center gap-5 text-secondary-100 text-[15px] rounded-lg hover:bg-secondary-100 hover:text-primary transition-colors pb-2 border-secondary-100 ${
            activeItem === item ? 'bg-secondary-100 text-primary' : ''
          }`}
          onClick={() => handleItemClick(item)}
        >
          {item.icono}
          <Link to={item.to}>{item.title}</Link>
        </li>
      ))}
        </ul>
      </div>
      <div className='text-center flex flex-col items-center justify-center gap-2 pt-5'>
        <img className='object-cover h-6 ' src="./logoSena.png" alt="" />
        <p className='text-[10px] text-secondary-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
        <Link className='text-[12px] text-secondary-900/60' to="/">alguncorre@soy.sena.edu.co</Link>
      </div>
    </div>
  )
}

import { 
  RiUser3Line,
  RiBookOpenLine,
  RiGroupLine,
  RiTv2Line,
  RiBuilding4Line,
  RiListOrdered,
  RiCalendarTodoLine
 } from "react-icons/ri";

export const items = [
  {icono: <RiUser3Line className='w-6 h-6'/> ,        title:'INSTRUCTOR',  to: '/instructores'},
  {icono: <RiBookOpenLine className='w-6 h-6'/> ,     title:'TEMATICA',    to: '/tematicas'},
  {icono: <RiGroupLine className='w-6 h-6'/> ,        title:'FICHA',       to: '/fichas'},
  {icono: <RiTv2Line className='w-6 h-6'/> ,          title:'PROGRAMA',    to: '/programa'},
  {icono: <RiBuilding4Line className='w-6 h-6'/> ,    title:'SEDE',        to: 'sede'},
  {icono: <RiListOrdered className='w-6 h-6'/>,       title:'TRIMESTRE',   to: '/trimestres'},
  {icono: <RiCalendarTodoLine className='w-6 h-6'/>,  title:'HORARIO',     to: '/'},
]
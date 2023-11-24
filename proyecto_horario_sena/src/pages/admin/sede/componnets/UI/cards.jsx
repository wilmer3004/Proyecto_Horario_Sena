import React from 'react'
import { Cardsede } from '../../../../../components/cardsSede/card'
import { sedeData } from '../../data/sendRequest'
import { RiMoreLine } from 'react-icons/ri'
import { MenuSede } from './select/select'

export const Cards = () => {
  const rows = sedeData()
  return (
    <div className='flex flex-wrap items-center justify-center gap-5'>
      {
        rows.map((row)=>(
          <div key={row.id}>
            <Cardsede
              identificador={row.id}
              title={row.nombreSede}
              estado={row.estadoSede === "1" ? "Activo": "Inactivo"}
              localidad={row.localidadInfo}
              direc={row.direccionSede}
              img={row.imagenSede}
            >
             <MenuSede/>
            </Cardsede>
          </div>
        ))
      }
    </div>
  )
}

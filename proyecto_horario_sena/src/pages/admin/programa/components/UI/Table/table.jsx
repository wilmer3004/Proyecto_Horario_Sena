"use client";

import * as React from 'react';
import { programaData } from '../../../data/sendRequest';
import { MenuPrograma } from '../select/select';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export const TablePrograma = ()=> {
  // Almacena la informacion traida desde la peticion get
  const rows = programaData()

  return (
    <div className='pt-2 border border-gray-200 rounded-lg'>
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table sx={{ minWidth: 1030}} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* Cabecera de la informacion renderizada desde el GET */}
              <TableCell>
                <p className='text-base font-bold '>Nombre Programa</p>
              </TableCell>
              <TableCell align="left">
                <p className='text-base font-bold '>Id Programa</p>
              </TableCell>
              <TableCell align="left">
                <p className='text-base font-bold '>Descripción</p>
              </TableCell>
              <TableCell align="left">
                <p className='text-base font-bold '>Versión Programa</p>
              </TableCell>
              <TableCell align="left">
              <p className='text-base font-bold '>Estado Programa</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* mapeamos la informacion retornada desde el get y las mostramos cada una  */}
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombrePrograma}
                </TableCell>
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.descripcionPrograma}</TableCell>
                <TableCell align="left">{row.versionPrograma}</TableCell>
                <TableCell align="left">{row.estadoPrograma === "1" ? "Activo": "Inactivo"}</TableCell>
                <TableCell align="left">
                  {/* Modal que nos permie actualizar y eliminar la informacion de la Programa mediante el id */}
                  <MenuPrograma 
                    id={row.id}
                    nombrePrograma={row.nombrePrograma}
                    descripcionPrograma={row.descripcionPrograma}
                    versionPrograma={row.versionPrograma}
                    estadoPrograma={row.estadoPrograma}
                    />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
"use client";

import * as React from 'react';
import { usuarioData } from '../../../data/sendRequest';
import {MenuInstructor} from '../select/select';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export const TableInstructor = ()=> {
  // Almacena la informacion traida desde la peticion get
  const rows = usuarioData()

  return (
    <div className='pt-2 border border-gray-200 rounded-lg'>
      <TableContainer component={Paper} className="overflow-x-auto">
        <Table sx={{ minWidth: 1030}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <p className='text-base font-bold '>Nombre instructor</p>
              </TableCell>
              <TableCell align="center">
                <p className='text-base font-bold '>Id Instructor</p>
              </TableCell>
              <TableCell align="center">
                <p className='text-base font-bold '>Estado Instructor</p>
              </TableCell>
              <TableCell align="center">
                <p className='text-base font-bold '>Horas Semanales</p>
              </TableCell>
              <TableCell align="right">
              <p className='text-base font-bold '>Tipo identificación</p>
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
                  {row.nombreInstructor}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.estadoInstructor === "1" ? "Activo": "Inactivo"}</TableCell>
                <TableCell align="right">{row.horasSemanales} Horas</TableCell>
                <TableCell align="right">{row.idTpoIdentificacionFK === "1" ? "CC" : (row.idTpoIdentificacionFK === "2" ? "TC" : (row.idTpoIdentificacionFK === "3" ? "CE" : "Otro"))}</TableCell>
                <TableCell align="right">
                  {/* Modal que nos permie actualizar y eliminar la informacion del instructor mediante el id */}
                  <MenuInstructor 
                    id={row.id}
                    imagenInstructor={row.imagenInstructor}
                    nombreInstructor={row.nombreInstructor}
                    apellidoInstructor={row.apellidoInstructor}
                    horasSemanales={row.horasSemanales}
                    estadoInstructor={row.estadoInstructor}
                    idTpoIdentificacionFK={row.idTpoIdentificacionFK}
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
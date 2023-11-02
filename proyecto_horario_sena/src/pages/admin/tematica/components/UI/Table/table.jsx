import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import BasicMenu from '../select/select';
import { tematicaData } from '../../../data/sendRequest';



export default function BasicTable() {
    const rows = tematicaData()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1030}} aria-label="simple table" className='shadow-xl'>
        <TableHead>
          <TableRow>
            <TableCell>Nombre Tematica</TableCell>
            <TableCell variant='head' align="center">Id Tematica</TableCell>
            <TableCell variant='head' align="center">Descripción tematica</TableCell>
            <TableCell variant='head' align="center">Horas maximas mensuales</TableCell>
            <TableCell variant='head' align="center">Horas maximas semanales</TableCell>
            <TableCell variant='head' align="center">Trimestre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.idTematica}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombreTematica}
              </TableCell>
              <TableCell align="center">{row.idTematica}</TableCell>
              <TableCell align="center">{row.descripcionTematica}</TableCell>
              <TableCell align="center">{row.horasMaximasM}:H</TableCell>
              <TableCell align="center">{row.horasMaxmasS}:H</TableCell>
              <TableCell align="center">{row.trimestre}: Trimestre</TableCell>
              <TableCell align="center">
                <BasicMenu 
                  id={row.idTematica}
                  descr={row.descripcionTematica}
                  maxHoursM={row.horasMaximasM}
                  maxHoursS={row.horasMaxmasS}
                  name={row.nombreTematica}
                  quarter={row.trimestre}
                  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
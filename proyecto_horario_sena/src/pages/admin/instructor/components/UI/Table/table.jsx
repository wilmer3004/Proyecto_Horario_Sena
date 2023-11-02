import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import BasicMenu from '../select/select';
import { usuarioData } from '../../../data/sendRequest';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function BasicTable() {
    const rows = usuarioData()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1030}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre Instructor</TableCell>
            <TableCell align="right">Id Instructor</TableCell>
            <TableCell align="right">Estado Instructor</TableCell>
            <TableCell align="right">Horas Semanales</TableCell>
            <TableCell align="right">Tipo identificación</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.idInstructor}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombreInstructor}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.estadoInstructor === 1 ? "Activo": "Inactivo"}</TableCell>
              <TableCell align="right">{row.horasSemanales}</TableCell>
              <TableCell align="right">{row.idTpoIdentificacionFK === 1 ? "Otro": "CC"}</TableCell>
              <TableCell align="right">
                <BasicMenu 
                  img={row.imagenInstructor}
                  name={row.nombreInstructor}
                  id={row.id}
                  lastName={row.apellidoInstructor}
                  weeklyHours={row.horasSemanales}
                  idType={row.idTpoIdentificacionFK}
                  />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
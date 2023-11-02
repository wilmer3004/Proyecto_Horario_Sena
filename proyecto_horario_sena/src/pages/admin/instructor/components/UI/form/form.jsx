import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const FormInstructor = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <form className='flex flex-col gap-4 items-center'>
      <h1 className='text-xl text-gray-500 font-semibold'>Registrar Instructor</h1>
      <FormControl >
        <div className='grid grid-cols-8 gap-4'>
          <TextField
            className='col-span-4'
            id="name"
            label="Nombre"
            variant="outlined"
            size='small'
          />
           <TextField
            className='col-span-4'
            id="lastName"
            label="Apellido"
            variant="outlined"
            size='small'
          />
          <Button
            style={{color:'gray'}}
            id="state"
            variant='outlined'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
              Estado
          </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Activo</MenuItem>
              <MenuItem onClick={handleClose}>Inactivo</MenuItem>
            </Menu>
          <TextField
            className='col-span-3'
            id="horsS"
            label="Horas semanales"
            variant="outlined"
            size='small'
          />
          <TextField
            className='col-span-4'
            id="urlImg"
            label="Url Imagen"
            variant="outlined"
            size='small'
          />
              
          </div>
        </FormControl>
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
    </form>

    </>
  );
}

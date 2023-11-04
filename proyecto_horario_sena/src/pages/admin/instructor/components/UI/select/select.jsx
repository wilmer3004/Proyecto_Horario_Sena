import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ModalInstructor } from '../modal/modal';
import { 
    RiMore2Fill,
    RiPencilLine,
    RiDeleteBin7Line
 } from "react-icons/ri";
import { ModalDelet } from '../modal/modalDelet';

export default function BasicMenu({
  id, 
  nombreInstructor,
  apellidoInstructor,
  estadoInstructor,
  horasSemanales,
  imagenInstructor,
}) {
  
  const [open, setOpen] = React.useState(false)
  const [openModal, setOpenModal]= React.useState(false)

  const [openModalDelet, setOpenModalDelet]= React.useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };

  const handleopenModal = ()=>{
    setOpenModal(true)
    handleClose();
  }

  const handleopenModalDelet = ()=>{
    setOpenModalDelet(true)
    handleClose();
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <RiMore2Fill/>
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
        <MenuItem onClick={handleopenModal}><span className='mx-2'><RiPencilLine/></span>Actualizar</MenuItem>
        <MenuItem onClick={handleopenModalDelet}><span className='mx-2 text-red-500'><RiDeleteBin7Line/></span>Eliminar</MenuItem>
      </Menu>
      <ModalInstructor 
        open={openModal} 
        handleClose={()=> setOpenModal(false)} 
        id={id}
        imagenInstructor={imagenInstructor}
        nombreInstructor={nombreInstructor}
        apellidoInstructor={apellidoInstructor}
        horasSemanales={horasSemanales}
        estadoInstructor={estadoInstructor}
      />
      <ModalDelet
        open={openModalDelet}
        handleClose={()=> setOpenModalDelet(false)}
        id={id}
        nombreInstructor={nombreInstructor}
      />
    </div>
  );
}

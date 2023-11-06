import * as React from 'react';
import { ModalFicha } from '../modal/modal';
import { ModalDelet } from '../modal/modalDelet';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { 
  RiMoreLine,
  RiPencilLine,
  RiDeleteBin7Line
} from "react-icons/ri";

export const MenuFicha = ({
  id, 
  nombreFicha,
  estadoFicha,
  idProgramaFK,
  idJornadaFK,

}) => {
  
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
        <RiMoreLine/>
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
      {/* Ventana modal que ejecuta el metodo put y deja actualizar la Ficha */}
      <ModalFicha 
        open={openModal} 
        handleClose={()=> setOpenModal(false)} 
        id={id}
        nombreFicha={nombreFicha}
        estadoFicha={estadoFicha}
        idProgramaFK={idProgramaFK}
        idJornadaFK={idJornadaFK}
      />
      {/* Ventana modale que deja eliminar la Ficha  */}
      <ModalDelet
        open={openModalDelet}
        handleClose={()=> setOpenModalDelet(false)}
        id={id}
        nombreFicha={nombreFicha}
      />
    </div>
  );
}

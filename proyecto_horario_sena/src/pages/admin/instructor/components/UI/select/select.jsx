import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ModalInstructor } from '../modal/modal';
import { 
    RiMore2Fill,
    RiPencilLine,
    RiFileCopyLine,
    RiDeleteBin7Line
 } from "react-icons/ri";

export default function BasicMenu({
  img,
  name,
  id,
  lastName,
  weeklyHours,
  idType
}) {
  
  const [open, setOpen] = React.useState(false)
  const [openModal, setOpenModal]= React.useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openBasic = Boolean(anchorEl);

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
        <MenuItem onClick={handleopenModal}><RiPencilLine/>Actualizar</MenuItem>
        <MenuItem onClick={handleClose}><RiFileCopyLine/>Copiar id</MenuItem>
        <MenuItem className='text-red-600 bg-blue-500' onClick={handleClose}><RiDeleteBin7Line/>Eliminar</MenuItem>
      </Menu>
      <ModalInstructor 
        open={openModal} 
        handleClose={()=> setOpenModal(false)} 
        img={img}
        id={id}
        name={name}
        lastName={lastName}
        weeklyHours={weeklyHours}
        idType={idType}
      />
    </div>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { 
    RiMore2Fill,
    RiPencilLine,
    RiFileCopyLine,
    RiDeleteBin7Line
 } from "react-icons/ri";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem onClick={handleClose}><RiPencilLine/>Actualizar</MenuItem>
        <MenuItem onClick={handleClose}><RiFileCopyLine/>Copiar id</MenuItem>
        <MenuItem className='text-red-600 bg-blue-500' onClick={handleClose}><RiDeleteBin7Line/>Eliminar</MenuItem>
      </Menu>
    </div>
  );
}

import React, {useState} from 'react';
import './PageHeaders.css'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import icon from '../assets/close.png'
import { ModalBlock } from './Modal';
import { SideBar } from './sideBar';



export const Header = ({ name, button }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  
  return (
    <div className='header '>
      <h1>{name}</h1>
      <button className='header__button button' onClick={handleOpen}>{button}</button>
      {name === 'Users' ? <SideBar setOpen={setOpen} isOpen={open}/> : <ModalBlock setOpen={setOpen} isOpen={open} />}
       
    </div>

  );
}



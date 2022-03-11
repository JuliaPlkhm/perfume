import React, {useState} from 'react';
import './PageHeaders.css'
import { ModalBlock } from './Modal';
import { SideBar } from './sideBar';
import { useSelector, useDispatch } from "react-redux";



export const Header = ({ name, button }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  
  return (
    <div className='header '>
      <h1>{name}</h1>
      <button className='header__button button' onClick={handleOpen}>{button}</button>
      {name === 'Profiles' ? <ModalBlock setOpen={setOpen} isOpen={open} /> : <SideBar setOpen={setOpen} type={name}  isOpen={open}/>}
       
    </div>

  );
}



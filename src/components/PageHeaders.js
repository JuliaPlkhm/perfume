import React, { useState } from 'react';
import './PageHeaders.css'
import { SideBar } from './sideBar';
import { PopUpProfile } from './PopUpProfile';

export const Header = ({ name, button, type, id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className='header '>
      <h1>{name}</h1>
      <button className='header__button button' onClick={handleOpen}>{button}</button>

      {type ? (
        <PopUpProfile setOpen={setOpen} isOpen={open} id={id}/>
      ) : (
          <SideBar setOpen={setOpen} type={name} isOpen={open} />
      )}
    </div>

  );
}



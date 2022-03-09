import React, {useState} from 'react';
import {  useDispatch } from "react-redux";

import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { postRole } from '../redux/actions/roles';
import icon from '../assets/close.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalBlock = ({isOpen, setOpen }) => {
  const dispatch = useDispatch();


  const [profileName, setProfileName] = useState('');

  const handelClick=()=>{
    dispatch(postRole({name: profileName}))
    setProfileName('')
    setOpen(false);
   
  }

  const handleClose = () =>{
    setOpen(false);
    setProfileName('')
  }
  return (
    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        
      >
        <Fade in={isOpen}>
          <div className='modal'>
            <h1 className='form__header'>Add New Profile</h1>
            <img className='closeButton' onClick={handleClose} src={icon}/>
          
             <div className='form__group'>
             <label className='form__label label' for="modalLabel">Profile Name</label>
             <input className='form__input input' type="text" id="modalInput"  value={profileName} onChange={e => setProfileName(e.target.value)}/>
             </div>
             
            
             <button  className='form__button button' onClick={handelClick}>Save</button>
             <button  className='form__button button' onClick={handleClose}>Cansel</button>

          </div>
          
        </Fade>
      </Modal>

  );
}
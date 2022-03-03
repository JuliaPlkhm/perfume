import React, {useState} from 'react';
import icon from '../assets/close.png'
import './sideBar.css';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


export  const SideBar = ({isOpen, setOpen }) => {
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [profile, setProfile] = useState('')
    const [field1, setField1] = useState('')
    const [field2, setField2] = useState('')
    const [field3, setField3] = useState('')

    const handelClick=()=>{
    }
    const handleClose = () =>{
        setOpen(false);
      }

  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    open={isOpen}
    onClose={handleClose}
    closeAfterTransition
    sx={{
      '&.MuiBackdrop-root':{backgroundColor: 'none'}}}
    
  >
    <Fade in={isOpen}>
    <div className='sideBar modal'>
         <h1 className='sideBar__header form__header'>Edit User</h1>
            <img className='closeButton' onClick={handleClose} src={icon}/>
          
             <div className=' sideBar__group form__group'>
             <label className='form__label label' for="lastName">Last Name</label>
             <input className='form__input input' type="text" id="lastName"  value={lastName} onChange={e => setLastName(e.target.value)}/>
             </div>
             
             <div className=' sideBar__group form__group'>
             <label className='form__label label' for="firstName">Last Name</label>
             <input className='sideBar__input form__input input' type="text" id="firstName"  value={firstName} onChange={e => setFirstName(e.target.value)}/>
             </div>

             <div className='sideBar__group form__group'>
             <label className='form__label label' for="profile">Profile</label>
             <input className='sideBar__input form__input input' type="text" id="profile"  value={profile} onChange={e => setProfile(e.target.value)}/>
             </div>

             <div className='sideBar__group form__group'>
             <label className='form__label label' for="field1">Field 1</label>
             <input className='sideBar__input form__input input' type="text" id="field1"  value={field1} onChange={e => setField1(e.target.value)}/>
             </div>

             <div className='sideBar__group form__group'>
             <label className='form__label label' for="field2">Field 2</label>
             <input className='sideBar__input form__input input' type="text" id="field2"  value={field2} onChange={e => setField2(e.target.value)}/>
             </div>
             <div className='sideBar__group form__group'>
             <label className='form__label label' for="field1">Field 3</label>
             <input className='sideBar__input form__input input' type="text" id="field3"  value={field3} onChange={e => setField3(e.target.value)}/>
             </div>
            <div className='sideBar__buttons'>
             <button  className='form__button button'>Save</button>
             <button  className='form__button button' onClick={handleClose}>Cansel</button>
            </div>
           

     </div>
      
    </Fade>
  </Modal>


     
  );
}
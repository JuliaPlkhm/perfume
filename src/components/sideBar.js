import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';

import icon from '../assets/close.png'
import './sideBar.css';
import { postUser } from '../redux/actions/users';
import { postAdminUser } from '../redux/actions/adminUsers';


const BootstrapInput = styled(InputBase)({
  '& .MuiInputBase-input': {
    borderColor: "transparent",
    fontFamily: 'Roboto',

    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '16px',

  },
  '& .MuiSelect-outlined, .MuiInputBase-input.MuiSelect-select': {
    minHeight: '0px',
    paddingLeft: '10px',
  },
});

export  const SideBar = ({isOpen, setOpen, type }) => {
  const dispatch = useDispatch();
  const { rolesForUsers} = useSelector((state) => state.rolesForUsers);
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [profile, setProfile] = useState('Profile')
    const [field1, setField1] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')

    const deleteState=()=>{
      setLastName()
      setFirstName()
      setProfile('Profile')
      setField1()
      setPassword()
      setUserName()
    }

    const handelClick=()=>{
      if (type === 'Users' ){
        const user ={
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          password: password,
          roleName: profile
        }
        dispatch(postUser(user))
      } else{
        const admin ={
          firstName: firstName,
          lastName: lastName,
          userName: userName,
          password: password,
        }
        dispatch(postAdminUser(admin))
      }
      handleClose()
    }

    const handleClose = () =>{
        setOpen(false);
      deleteState()

      }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      sx={{
        '&.MuiBackdrop-root': { backgroundColor: 'none' }
      }}

    >
      <Fade in={isOpen}>
        <div className='sideBar modal'>
          <h1 className='sideBar__header form__header'>Add User</h1>
          <img className='closeButton' onClick={handleClose} src={icon} />

          <div className=' sideBar__group form__group'>
            <label className='form__label label' htmlFor="lastName">Last Name</label>
            <input className='form__input input' type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>

          <div className=' sideBar__group form__group'>
            <label className='form__label label' htmlFor="firstName">Last Name</label>
            <input className='sideBar__input form__input input' type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>

        {type === 'Users' &&  (<div className='sideBar__group form__group'>
            <label className='form__label label' htmlFor="profile">Profile</label>
            <Select
              value={profile}
              className='sideBar__input form__input input'
              displayEmpty
              sx={{ fontSize: '14px' }}
              input={<BootstrapInput />}
              onChange={e => setProfile(e.target.value)}
            >
              {rolesForUsers?.map((el) => <MenuItem sx={{ fontSize: '14px' }} key ={el.label} value={el.label}>{el.label}</MenuItem>)}

            </Select>
          </div>)}

          <div className='sideBar__group form__group'>
            <label className='form__label label' htmlFor="field1">User Name</label>
            <input className='sideBar__input form__input input' type="text" id="field1" value={userName} onChange={e => setUserName(e.target.value)} />
          </div>

          <div className='sideBar__group form__group'>
            <label className='form__label label' htmlFor="field2">Password</label>
            <input className='sideBar__input form__input input' type="text" id="field2" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className='sideBar__group form__group'>
            <label className='form__label label' htmlFor="field1">Field 1</label>
            <input className='sideBar__input form__input input' type="text" id="field3" value={field1} onChange={e => setField1(e.target.value)} />
          </div>
          <div className='sideBar__buttons'>
            <button className='form__button button' onClick={handelClick}>Save</button>
            <button className='form__button button' onClick={handleClose}>Cansel</button>
          </div>


        </div>

      </Fade>
    </Modal>


     
  );
}
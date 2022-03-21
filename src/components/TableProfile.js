import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListSubheader from '@mui/material/ListSubheader';
import { ModalBlock } from './Modal';
import edit from '../assets/edit.png'
import {  useDispatch } from "react-redux";
import { changeRole } from "../redux/actions/roles";
import { Scrollbar } from "react-scrollbars-custom";


function ListItem(props) {
  const [value, setValue] = useState(props.element.name);

  if(props.state === props.element.id){

  return (
    <ListItemButton className='profileList__item'>
  <input value={value} onChange={(e)=> setValue(e.target.value)} onBlur={props.handleBlur(props.element.id, value)} autoFocus></input>
  </ListItemButton>
  )} else{
    return (
      <ListItemButton className='profileList__item'
        selected={props.selected}
        onClick={props.onClick(props.element)}
      >
        <ListItemText primary={props.element.name} />
        <img onClick={props.handelRename(props.element.id)} src={edit} />
      </ListItemButton>
    )
  
  }

  
}


export function ProfileList({ roles, selectedProfile, setSelectedProfile }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [stateRename, setStateRename] = useState();


  const handleOpen = () => setOpen(true);

  const handleListItemClick = (el) => () => {
    setSelectedProfile(el);
    console.log(selectedProfile)
  };

  const handelRename =(id) => () =>{
    setStateRename(id)
    console.log(stateRename)
  }

  const handleBlur = (id, value) => () => {
    dispatch(changeRole({id: id, name: value}))
    setStateRename('')
}

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }} className='profileList'>
      <div className='profileList__header'>
        <button className='profileList__button header__button button' onClick={handleOpen}>Add New</button>
        <ModalBlock setOpen={setOpen} isOpen={open} />
      </div>
      <List aria-label="profiles" className='profileList__list'>
      <Scrollbar style={{ width: '100%', height: '330px' }}
      trackYProps={{ className: "profileList__scroll" }}>
        {roles?.map((el) => (
          <ListItem key={el.id} element={el} state ={stateRename} selected={selectedProfile?.id === el.id}
            onClick={handleListItemClick}  handelRename={handelRename} handleBlur={handleBlur}/>
        ))}
        </Scrollbar>
      </List>
    </Box>
  );
}

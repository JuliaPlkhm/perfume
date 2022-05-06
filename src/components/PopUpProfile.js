import React, { useEffect, useState } from 'react';

import {  useDispatch, useSelector } from "react-redux";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import * as yup from 'yup';
import getColumns from './Tables/getColumnsProfile';
import { setError } from '../redux/actions/error';
import { postRole } from '../redux/actions/roles';

import icon from '../assets/close.png'

import { Table } from './Tables/Table';

import { changeUser } from '../redux/actions/users';


export const PopUpProfile = ({ isOpen, setOpen, id }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [selectionModel, setSelectionModel] = useState([]);
 

  const handleClose = () => {
    setOpen(false);
    dispatch(setError(null))

  }
  const handleClick = () => {
    selectionModel?.map((el)=>{
      dispatch(changeUser({id: el, roleName: id}))

    })


  }

  const [row, setRow] = useState([])
  const [columns, setColumns] = useState([])

  useEffect(() => {
    setRow([])
  
      users?.map((el) => {
        if (id !== el?.role.name) {
          const rowItem = {
            id: el.id,
            lastName: el.lastName,
            firstName: el.firstName,
            userName: el.userName,
            roleName: el.role.name,
          }
          setRow((row) => [...row, rowItem])
        }
      })
    
    setColumns(() => getColumns())

  }, [users, id])



  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={isOpen}>
        <div className='modal modalPopUp'>
        <h1 className='form__header'>Add Users</h1>
         <img className='closeButton' onClick={handleClose} src={icon} />
          <Table className= 'PopUpProfile__table' type="popUp" row={row} columns={columns} select={selectionModel} setSelect={setSelectionModel}/>
          <div style={{marginTop: '20px'}}>
          <button className='form__button button' onClick={handleClick} >Save</button>
                <button className='form__button button' onClick={handleClose}>Cansel</button>
                </div>
        </div>

      </Fade>
    </Modal>

  );
}
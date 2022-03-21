import React from 'react';
import {  useDispatch, useSelector } from "react-redux";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import { setError } from '../redux/actions/error';
import { postRole } from '../redux/actions/roles';
import icon from '../assets/close.png'

import { TransferList } from './TransferList';

const validationSchema = yup.object({
  profile: yup
      .string('Enter your email')
      .min(3, 'Profile should be of minimum 3 characters length')
      .required('Email is required'),
  });



export const ModalProfile = ({ isOpen, setOpen, permissions }) => {
  const dispatch = useDispatch();
  const { pages } = useSelector((state) => state.roles);
 

  const handleClose = () => {
    setOpen(false);
    dispatch(setError(null))

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

          <TransferList permissions={permissions} allPermissions ={pages}/>

        </div>

      </Fade>
    </Modal>

  );
}
import React, {useState} from 'react';
import {  useDispatch } from "react-redux";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import { postRole } from '../redux/actions/roles';
import icon from '../assets/close.png'


const validationSchema = yup.object({
  profile: yup
      .string('Enter your email')
      .min(3, 'Profile should be of minimum 3 characters length')
      .required('Email is required'),
  });



export const ModalBlock = ({ isOpen, setOpen }) => {
  const dispatch = useDispatch();

  const handelClick = () => {
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
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

          <Formik
            initialValues={{
              profile: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              dispatch(postRole({ name: values.profile }))
            }}
          >
            {({ errors, touched }) => (
              <Form >
                <h1 className='form__header'>Add New Profile</h1>
                <img className='closeButton' onClick={handleClose} src={icon} />
                <div className='form__group'>
                  <label className='form__label label' htmlFor="modalLabel">Profile Name</label>

                  <Field
                    className={errors.profile && touched.profile ? 'form__input-error' : 'form__input'}
                    id="modalLabel"
                    name="profile" />
                  {errors.profile && touched.profile && (
                    <span className="error">{errors.profile}</span>
                  )}
                </div>

                <button className='form__button button' type="submit" onClick={errors.profile ? null : handleClose }>Save</button>
                <button className='form__button button' onClick={handleClose}>Cansel</button>
              </Form>
            )}
          </Formik>

        </div>

      </Fade>
    </Modal>

  );
}
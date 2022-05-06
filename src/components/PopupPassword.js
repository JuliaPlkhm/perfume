import React from 'react';
import {  useDispatch, useSelector } from "react-redux";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import Menu from '@mui/material/Menu';
import { setError } from '../redux/actions/error';
import { postRole } from '../redux/actions/roles';
import icon from '../assets/close.png'


const validationSchema = yup.object({
    password: yup
    .string('Enter your Password')
    .min(3, 'Password should be of minimum 3 characters length')
    .required('Password is required'),
    confirmPassword: yup
    .string('Enter your Password').
    oneOf([yup.ref('password')], 'Invalid password')
    .required('Confirm Password is required'),
  });



export const PopUpPassword = ({ isOpen, setOpen, handleChange }) => {
  const dispatch = useDispatch();
 

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
      sx={{backgroundColor:'rgba(0, 0, 0, 0.5)'}}
    >
      <Fade in={isOpen}>
        <div className='modal'>

          <Formik
            initialValues={{
                password: '',
                confirmPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values)=>handleChange(values.password)}
          >
            {({ errors, touched }) => (
              <Form >
                <h1 className='form__header'>Enter Password</h1>
                <img className='closeButton' onClick={handleClose} src={icon} />
                <div className='sideBar__group form__group'>
                  <label className='form__label label' htmlFor="password">Password *</label>
                  <Field className='form__input input' type="password" id="password" name="password" autocomplete='new-password'/>
                  {errors.password && touched.password && <span className="error">{errors.password}</span>}
                </div>

                <div className='sideBar__group form__group'>
                  <label className='form__label label' htmlFor="confirmPassword">Confirm Password *</label>
                  <Field className='form__input input' type="password" id="confirmPassword" name="confirmPassword" autocomplete='newPassword'/>
                  {errors.confirmPassword && touched.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>

                <button className='form__button button' type="submit" >Save</button>
                <button className='form__button button' onClick={handleClose}>Cansel</button>
              </Form>
            )}
          </Formik>

        </div>

      </Fade>
    </Modal>

  );
}
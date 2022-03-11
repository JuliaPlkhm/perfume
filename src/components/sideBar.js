import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

import icon from '../assets/close.png'
import './sideBar.css';
import { postUser } from '../redux/actions/users';
import { postAdminUser } from '../redux/actions/adminUsers';
import { setError } from '../redux/actions/error';


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


const initialValues={
  firstName: '',
  lastName: '',
  userName: '',
  password: '',
  confirmPassword: '',
  profile: '',
  field1: ''
}

export const SideBar = ({ isOpen, setOpen, type }) => {
  const dispatch = useDispatch();
  const { rolesForUsers } = useSelector((state) => state.rolesForUsers);
  const { error } = useSelector((state) => state.error);


  let validationSchema = yup.object({
    lastName: yup
      .string('Enter your Last Name')
      .min(3, 'Last Name should be of minimum 3 characters length')
      .required('Last Name is required'),
    firstName: yup
      .string('Enter your First Name')
      .min(3, 'First Name should be of minimum 3 characters length')
      .required('First Name is required'),
    userName: yup
      .string('Enter your User Name')
      .min(3, 'User Name should be of minimum 3 characters length')
      .required('User Name is required'),
    password: yup
      .string('Enter your Password')
      .min(3, 'Password should be of minimum 3 characters length')
      .required('Password is required'),
      confirmPassword: yup
      .string('Enter your Password').
      oneOf([yup.ref('password')], 'Invalid password')
      .required('Confirm Password is required'),
  });


  if (type === 'Users') {
    validationSchema = validationSchema.concat(yup.object({
      profile: yup.string('Enter your Profile')
        .min(3, 'Profile should be of minimum 3 characters length')
        .required('Profile is required')
    }))
  }


  const handelClick =(values) => {

    if (type === 'Users') {
      const user = {
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName,
        password: values.password,
        roleName: values.profile
      }
      dispatch(postUser(user))
     
    } else {
      const admin = {
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName,
        password: values.password,
      }
       dispatch(postAdminUser(admin))
  
    }
    //  handleClose()
  }

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
      sx={{
        '&.MuiBackdrop-root': { backgroundColor: 'none' },
        height: '100vh',
       overflowY: 'auto'
      }}

    >
      <Fade in={isOpen}>
        <div className='sideBar modal'>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, {resetForm}) => {
              handelClick(values)
            resetForm(initialValues)}}
          >

            {({ errors, touched, values, handleChange }) => (
              <Form >
                <h1 className='sideBar__header form__header'>Add User</h1>
                <img className='closeButton' onClick={handleClose} src={icon} />
                <div className=' sideBar__group form__group'>
                  <label className='form__label label' htmlFor="lastName">Last Name</label>
                  <Field className='form__input input' type="text" id="lastName" name="lastName" />
                  {errors.lastName && touched.lastName && <span className="error">{errors.lastName}</span>}
                </div>

                <div className=' sideBar__group form__group'>
                  <label className='form__label label' htmlFor="firstName">First Name</label>
                  <Field className='form__input input' type="text" id="firstName" name="firstName" />
                  {errors.firstName && touched.firstName && <span className="error">{errors.firstName}</span>}

                </div>

                {type === 'Users' && (<div className='sideBar__group form__group'>
                  <label className='form__label label' htmlFor="profile">Profile</label>
                  <Select
                    value={values.profile}
                    className='sideBar__input form__input input'
                    // displayEmpty
                    name="profile"
                    sx={{ fontSize: '14px' }}
                    input={<BootstrapInput />}
                    onChange={handleChange}
                  >
                    {rolesForUsers?.map((el) => el.label !== 'Admin' &&  <MenuItem sx={{ fontSize: '14px' }} key={el.label} value={el.label}>{el.label}</MenuItem>)}

                  </Select>
                  {errors.profile && touched.profile && <span className="error">{errors.profile}</span>}
                </div>)}

                <div className='sideBar__group form__group'>
                  <label className='form__label label' htmlFor="userName">User Name</label>
                  <Field className='form__input input' type="text" id="userName" name="userName" />
                  {errors.userName && touched.userName && <span className="error">{errors.userName}</span>}
                </div>

                <div className='sideBar__group form__group'>
                  <label className='form__label label' htmlFor="password">Password</label>
                  <Field className='form__input input' type="password" id="password" name="password" autocomplete='new-password'/>
                  {errors.password && touched.password && <span className="error">{errors.password}</span>}
                </div>

                <div className='sideBar__group form__group'>
                  <label className='form__label label' htmlFor="confirmPassword">Confirm Password</label>
                  <Field className='form__input input' type="password" id="confirmPassword" name="confirmPassword" autocomplete='newPassword'/>
                  {errors.confirmPassword && touched.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                </div>

                <div className='sideBar__group form__group'>
                  <label className='form__label label' htmlFor="field1">Field 1</label>
                  <Field className='form__input input' type="text" id="field1" name="field1"  />
                  {errors.field1 && touched.field1 && <span className="error" >{errors.field1}</span>}
                </div>
                {error && <span className="error sideBar__error">{error}</span>}
               

                <div className='sideBar__buttons'>
                  <button className='form__button button' type="submit">Save</button>
                  <button className='form__button button' onClick={handleClose}>Cansel</button>
                </div>
              </Form>
            )}
          </Formik>

        </div>

      </Fade>
    </Modal>

  );
}



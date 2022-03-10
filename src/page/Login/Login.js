import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import './Login.css';
import { Logo } from '../../components/Logo';
import { setLogin } from '../../redux/actions';
import { Formik, Field, Form } from 'formik';

import * as yup from 'yup';

const validationSchema = yup.object({
    username: yup
      .string('Enter your email')
      .min(3, 'User Name should be of minimum 3 characters length')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(4, 'Password should be of minimum 4 characters length')
      .required('Password is required'),
  });


export  const Login = () => {
    const dispatch = useDispatch();
  

    return (
        <div className='loginWrapper wrapper '>
            <div className='login__header'><Logo /></div>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={values => {
                    dispatch( setLogin({userName: values.username, password: values.password}));
                }}
            >
                {({ errors, touched }) => (
                    <Form className='login__form form'>
                        <h1 className='form__header'>Login</h1>
                        <div className='form__group'>
                            <label className='form__label' htmlFor="username">User Name</label>
                            <Field 
                            className={ errors.username && touched.username ? 'form__input-error' : 'form__input' }
                            type="text" 
                            id="username" 
                            name="username" />
                            {errors.username && touched.username && (
                                <span className="error">{errors.username}</span>
                            )}
                        </div>
                        <div className='form__group'>

                            <label className='form__label' htmlFor="password">Password</label>
                            <Field 
                             className={ errors.password && touched.password ? 'form__input-error' : 'form__input' }
                            type="password" 
                            name="password" 
                            id="password" />
                            {errors.password && touched.password && (
                                <span className="error">{errors.password}</span>
                            )}
                        </div>
                        <button type="submit" className='form__button button' >Login</button>
                    </Form>
                )}
            </Formik>
        </div >
    );
}
import React from 'react';
import { Logo } from '../components/Logo';
import { MenuNav } from '../components/menu';

import { useSelector, useDispatch } from "react-redux";
import { logout } from '../redux/actions/user';



export  const Main = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

    const handleLogout = () => () => {
        dispatch(logout())
      }
  return (
     <div className='loginWrapper wrapper '>
         <div className='login__header'><Logo/></div>
         <div className='login__form form'>
             < MenuNav logout={handleLogout} user={user}/>
         </div>
     </div>
  );
}
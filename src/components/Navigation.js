import React, {useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';
import { useSelector, useDispatch } from "react-redux";

import { styled } from '@mui/material/styles';
import {  MenuNav } from './menu';

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Logo } from './Logo';
import users from '../assets/users.png'
import profile from '../assets/profile.png'
import admin from '../assets/admin.png'
import { logout } from '../redux/actions/user';


  
  const AntTabs = styled(Tabs)({
      "& .MuiTab-root":{
        minHeight: '0px',
      },
    "& .MuiTabs-indicator": {
      transform: "translateY(29px)",
      border:"3px solid #C4C4C4",
      backgroundColor: "#C4C4C4"
    },
    "& .MuiTabs-scroller, .MuiBoxs-root ": {
      overflow: "visible !important"
    },
      "& .MuiButtonBase-root, MuiTab-root.Mui-selected, .MuiButton-root, .MuiButton-text ": {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '14px',
          lineHeight: '16px',
          textTransform: 'capitalize',
          color: '#000000 !important',
          minHeight: '0px',
          padding: '0 23px'
      },


  });

export const Nav = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => () => {
    dispatch(logout())
  }
  const location = useLocation();

  const [value, setValue] = useState(location.pathname === '/login' ? '/users': location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='nav'>
      <nav className='nav__container container'>
        <Logo />
        <div>
          <AntTabs
            sx={{ overflow: "visible !important", minHeight: '0px' }}
            value={value}
            onChange={handleChange}
            aria-label="nav tabs"
          >
            <Tab value="/users" icon={<img src={users} />} iconPosition="start" label={<h4>Users</h4>} to='/users' component={Link} disableRipple />

            <Tab value="/profiles" icon={<img src={profile} />} iconPosition="start" label={<h4>Profile</h4>} to='/profiles' component={Link} disableRipple />

            <Tab value="/admin" icon={<img src={admin} />} iconPosition="start" label={<h4>Admin users</h4>} to='/admin' component={Link} disableRipple />
          </AntTabs>
        </div>

        < MenuNav user={user} logout={handleLogout}></ MenuNav>
      </nav>
    </div>

  );
}
import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

import { styled } from "@mui/material/styles";


import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Logo } from './Logo';
import users from '../assets/users.png'
import profile from '../assets/profile.png'
import admin from '../assets/admin.png'


function LinkTab(props) {
    return (
      <Tab
        disableRipple
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }
  
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
      "& .MuiButtonBase-root, MuiTab-root.Mui-selected ": {
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

    const [value, setValue] = React.useState(0);

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
                        <Tab icon={<img src={users} />} iconPosition="start" label={<h4>Users</h4>} to='/users' component={Link} disableRipple />

                        <Tab icon={<img src={profile} />} iconPosition="start" label={<h4>Profile</h4>} to='/profiles' component={Link} disableRipple />

                        <Tab icon={<img src={admin} />} iconPosition="start" label={<h4>Admin users</h4>} to='/admin' component={Link} disableRipple />
                    </AntTabs>
                </div>

                <p className='nav__menu'>Username</p>
            </nav>
        </div>

    );
}
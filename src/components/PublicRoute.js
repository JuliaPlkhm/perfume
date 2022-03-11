import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

const PublicRoutes = () => {
    const { loggedIn } = useSelector((state) => state.user);
    // const  {user} = useSelector((state) => state.user);


    // if( loggedIn && user?.role.name === 'Admin'){
    //     return <Navigate to="/users" />
    //   }  else if( loggedIn ){
    //     return <Navigate to="/main" />
    //   } else{
    //     return <Outlet />
    //   }
    return loggedIn? <Navigate to="/users" /> : <Outlet />
}


export default PublicRoutes;;
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const { loggedIn } = useSelector((state) => state.user);
  //   const  {user} = useSelector((state) => state.user);

  // if( loggedIn && user?.role.name === 'Admin'){
  //   return <Outlet/> 
  // }  else if( loggedIn ){
  //   return <Navigate to="/main" />
  // } else{
  //   return <Navigate to="/login" />
  // }
  return loggedIn? <Outlet/> : <Navigate to="/login" />
    
    
  
}

export default ProtectedRoute;
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute(props) {
    const { loggedIn } = useSelector((state) => state.user);

  return loggedIn? <Outlet/> : <Navigate to="/login" />
    
    
  
}

export default ProtectedRoute;
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

const PublicRoutes = ({ loggedIn }) => {

    return loggedIn? <Navigate to="/users" /> : <Outlet />
}


export default PublicRoutes;;
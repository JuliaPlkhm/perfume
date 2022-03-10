import React, {useEffect} from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { Nav } from './Navigation';
import { Admin } from "../page/Admin/Admin";
import {Profile} from '../page/Profile/Profile';
import { Login } from '../page/Login/Login';
import { Users } from "../page/Users/Users";
import { Main } from '../page/mainPage';
import PublicRoute from './PublicRoute'
import ProtectedRoute from "./ProtectedRoute";
import { checkLogged } from "../redux/actions/user";
import { useSelector, useDispatch } from "react-redux";


export function Body() {
    const { loggedIn } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkLogged());
    }, [])

    if (loggedIn === 'unknown') {
        return null
    } else {
        return (
            <div>

                {/* {loggedIn && <Nav />} */}
                <Routes>
                    <Route path="/" element={<ProtectedRoute loggedIn={loggedIn} />}>
                        <Route path="" element={<Navigate to="/users" />} />
                    </Route>

                    <Route path="/users" element={<ProtectedRoute loggedIn={loggedIn} />}>
                        <Route path="" element={<Users />} />
                    </Route>

                    <Route path="/profiles" element={<ProtectedRoute loggedIn={loggedIn} />}>
                        <Route path="" element={<Profile />} />
                    </Route>

                    <Route path="/admin" element={<ProtectedRoute loggedIn={loggedIn} />}>
                        <Route path="" element={<Admin />} />
                    </Route>
                    <Route path="/main" element={<ProtectedRoute loggedIn={loggedIn} />}>
                        <Route path="" element={<Main />} />
                    </Route>


                    <Route path="/" element={<PublicRoute loggedIn={loggedIn} />}>
                        <Route path="/login" element={<Login />} />
                    </Route>
                </Routes>

            </div>
        );
    }

}


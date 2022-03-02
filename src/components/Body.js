import { Route, Routes, Navigate } from "react-router-dom";
import { Nav } from './Navigation';
import { Admin } from "../page/Admin/Admin";
import {Profile} from '../page/Profile/Profile';
import { Login } from '../page/Login/Login';
import { Users } from "../page/Users/Users";
import PublicRoute from './PublicRoute'
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

export function Body() {
    const { loggedIn } = useSelector((state) => state.user);
    return (
        <div>
            {loggedIn && <Nav />}
            <Routes>
                <Route path="/" element={<ProtectedRoute />}>
                    <Route path="" element={<Navigate to="/users" /> } />
                </Route>

                <Route path="/users" element={<ProtectedRoute />}>
                    <Route path="" element={<Users />} />
                </Route>

                <Route path="/profiles" element={<ProtectedRoute />}>
                    <Route path="" element={<Profile />} />
                </Route>

                <Route path="/admin" element={<ProtectedRoute />}>
                    <Route path="" element={<Admin />} />
                </Route>


                <Route path="/" element={<PublicRoute />}>
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </div>
    );
}


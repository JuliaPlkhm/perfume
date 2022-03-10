import axios from "axios";
import * as types from "../types";
import { setError } from "./error";

export const setAdminUsers = (user) => {
  return {
    type: types.SET_ADMIN_USERS,
    payload: user,
  };
};

export const addAdminUser = (user) => {
  return {
    type: types.ADD_ADMIN_USER,
    payload: user,
  };
};

export const getAdminUsers = () => {
  return (dispatch) => {
    axios.get(`https://localhost:5001/Admin/`, {withCredentials: true}).then((res) => {
      dispatch(setAdminUsers(res.data));
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const postAdminUser = (user) => {

  return (dispatch) => {
    axios.post(`https://localhost:5001/Admin/`, user, {withCredentials: true}).then((res) => {
      dispatch(addAdminUser(res.data));
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const deleteAdminUser = (id) => {

  return (dispatch) => {
    axios.delete(`https://localhost:5001/Admin/${id}`, {withCredentials: true}).then((res) => {
      dispatch(getAdminUsers());
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};
export const changeAdminUser = (user) => {

  return (dispatch) => {
    axios.put(`https://localhost:5001/Admin/`, user, {withCredentials: true}).then((res) => {
      dispatch(getAdminUsers());
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};



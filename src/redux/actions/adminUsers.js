import axios from "axios";
import * as types from "../types";

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
    });
  };
};

export const postAdminUser = (user) => {

  return (dispatch) => {
    axios.post(`https://localhost:5001/Admin/`, user, {withCredentials: true}).then((res) => {
      dispatch(addAdminUser(res.data));
    });
  };
};

export const deleteAdminUser = (id) => {

  return (dispatch) => {
    axios.delete(`https://localhost:5001/Admin?id=${id}`, id, {withCredentials: true}).then((res) => {
      dispatch(getAdminUsers());
    });
  };
};
export const changeAdminUser = (user) => {

  return (dispatch) => {
    axios.put(`https://localhost:5001/Admin/`, user, {withCredentials: true}).then((res) => {
      dispatch(getAdminUsers());
    });
  };
};



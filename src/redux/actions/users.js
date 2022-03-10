import axios from "axios";
import * as types from "../types";
import { setError } from "./error";

export const setUsers = (user) => {
  return {
    type: types.SET_USERS,
    payload: user,
  };
};

export const addUser = (user) => {
  return {
    type: types.ADD_USER,
    payload: user,
  };
};

export const postUser = (user) => {

  return (dispatch) => {
    axios.post(`https://localhost:5001/users/`, user, {withCredentials: true}).then((res) => {
      dispatch(addUser(res.data));
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const deleteUser = (id) => {

  return (dispatch) => {
    axios.delete(`https://localhost:5001/users/${id}`, id, {withCredentials: true}).then((res) => {
      dispatch(getUsers());
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};
export const changeUser = (user) => {

  return (dispatch) => {
    axios.put(`https://localhost:5001/users/`, user, {withCredentials: true}).then((res) => {
      dispatch(getUsers());
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};


export const getUsers = () => {
  return (dispatch) => {
    axios.get(`https://localhost:5001/users/`, {withCredentials: true}).then((res) => {
      dispatch(setUsers(res.data));
    }).catch(err=>dispatch(setError(err)));
  };
};
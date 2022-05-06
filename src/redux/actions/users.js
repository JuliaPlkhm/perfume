import * as types from "../types";
import { setError } from "./error";

import { postAPI } from "../../api/api";
import { getAPI } from "../../api/api";
import { deleteAPI } from "../../api/api";
import { putAPI } from "../../api/api";


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
    postAPI('/users', user).then((res) => {
      dispatch(addUser(res.data));
      dispatch(setError(null))
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const deleteUser = (id) => {

  return (dispatch) => {
    deleteAPI(`/users/${id}`).then((res) => {
      dispatch(getUsers());
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};
export const changeUser = (user) => {
  return (dispatch) => {
    putAPI(`users/`, user).then((res) => {
      dispatch(getUsers());
    }).catch(err=>{
      dispatch(setError(err.response.data))
      dispatch(getUsers());
    
    });
  };
};


export const getUsers = () => {
  return (dispatch) => {
    getAPI(`/users/`).then((res) => {
      dispatch(setUsers(res.data));
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};
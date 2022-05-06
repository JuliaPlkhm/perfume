import * as types from "../types";
import { setError } from "./error";

import { postAPI } from "../../api/api";
import { getAPI } from "../../api/api";
import { deleteAPI } from "../../api/api";
import { putAPI } from "../../api/api";

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
   getAPI(`/Admin/`).then((res) => {
      dispatch(setAdminUsers(res.data));
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const postAdminUser = (user) => {

  return (dispatch) => {
    postAPI(`/Admin/`, user).then((res) => {
      dispatch(addAdminUser(res.data));
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};

export const deleteAdminUser = (id) => {

  return (dispatch) => {
    deleteAPI(`/Admin/${id}`).then((res) => {
      dispatch(getAdminUsers());
    }).catch(err=>dispatch(setError(err.response.data)));
  };
};
export const changeAdminUser = (user) => {

  return (dispatch) => {
    putAPI(`/Admin/`, user).then((res) => {
      dispatch(getAdminUsers());
    }).catch(err=>{
      dispatch(setError(err.response.data))
      dispatch(getAdminUsers());}
      );
  };
};


